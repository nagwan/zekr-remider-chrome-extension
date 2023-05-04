import azkar from "./azkar.js"

const alarmName = "zekr-reminder"

chrome.runtime.onInstalled.addListener(() => {
    sendNotification()
    chrome.alarms.get(alarmName, alarm => {
        if (!alarm) {
            createAlarm()
        }
    });
});


chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.sync.get((result) => {
        let userInterval = +result.favoriteInterval || 30
        if (alarm.name === alarmName && alarm.periodInMinutes !== userInterval) {
            clearAlarm()
            createAlarm()
        } else {
            sendNotification()
        }
    })
});

function createAlarm() {
    chrome.storage.sync.get((result) => {
        let userInterval = +result.favoriteInterval || 30
        chrome.alarms.create(alarmName, {
            periodInMinutes: userInterval
        });
    })
}


function clearAlarm() {
    chrome.alarms.clear(alarmName);
}

function sendNotification() {
    const now = new Date();
    const hourOfDay = now.getHours();
    const isMorningTime = hourOfDay >= 5 && hourOfDay < 16;
    const isEveningTime = hourOfDay >= 20 || hourOfDay < 5;

    let zekr = null;
    let lastZekr = null;
    let tag = null;

    if (isMorningTime) {
        tag = 'أذكار الصباح';
    } else if (isEveningTime) {
        tag = 'أذكار المساء';
    }

    if (tag === null) {
        return;
    }

    const filteredAzkar = azkar.filter(zekr => zekr.tag === tag);
    if (filteredAzkar.length === 0) {
        return;
    }

    do {
        zekr = filteredAzkar[Math.floor(Math.random() * filteredAzkar.length)];
    } while (zekr === lastZekr);
    lastZekr = zekr;

    chrome.notifications.create({
        type: "basic",
        iconUrl: "./assets/images/tasbih.png",
        title: "", // Use the tag property instead of category
        message: zekr.text,
        contextMessage: zekr.bless,
        priority: 2,
        silent: false,
        requireInteraction: true,
    });
    setTimeout(() => {
        chrome.notifications.clear(tag); // Clear the notification after a minute
    }, 5000);
}
