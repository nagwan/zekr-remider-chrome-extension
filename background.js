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
    const zekr = azkar[Math.floor(Math.random() * azkar.length)];
    const notifications_title = "Zekr Reminder"
    chrome.notifications.create({
        type: "basic",
        iconUrl: "./assets/images/logo.png",
        title: notifications_title,
        message: zekr,
        priority: 2,
        silent: false,
    });
}
