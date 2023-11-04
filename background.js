import azkar from "./azkar.js"

const alarmName = "zekr-remider"


chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get((result) => {
        let userInterval = +result.favoriteInterval || 15
        chrome.alarms.get(alarmName, alarm => {
            if (!alarm) {
                createAlarm()
            } else if (alarm.name === alarmName && alarm.periodInMinutes !== userInterval) {
                clearAlarm()
                createAlarm()
            } else {
                sendNotification()
            }
        });
    })
});


chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.sync.get((result) => {
        let userInterval = +result.favoriteInterval || 15
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
        let userInterval = +result.favoriteInterval || 15
        chrome.alarms.create(alarmName, {
            periodInMinutes: userInterval
        });
    })
}


function clearAlarm() {
    chrome.alarms.clear(alarmName);
}


function sendNotification() {
    chrome.storage.sync.get((result) => {
        const userCustomAzkar = result.userAzkar?.length && result.userAzkar.map((el) => el.value) || []
        const azkarList = [...userCustomAzkar, ...azkar]
        const zekr = azkarList[Math.floor(Math.random() * azkarList.length)];
        chrome.notifications.create({
            type: "basic",
            iconUrl: "./assets/images/logo-2.png",
            title: 'Zekr Reminder',
            message: `${zekr}`,
            priority: 2,
            silent: false,
        });
    })
}
