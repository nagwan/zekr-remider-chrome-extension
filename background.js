
const alarmName = "zekr-remider"
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
        let userInterval = +result.favoriteInterval || .5
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
        let userInterval = +result.favoriteInterval || .5
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
    chrome.notifications.create({
        type: "basic",
        iconUrl: "./assets/images/logo.png",
        title: zekr,
        message: zekr,
        priority: 2,
        silent: false,
    });
}

const azkar = [
    "الْحَمْدُ لِلَّهِ",
    "لا إلهَ إلاّ الله",
    "رَبِّ أسْأَلُكَ خَيرَ ما في هذا اليوم وَخَيرَ مابَعْدَه",
    " حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
    "رَضيتُ بِالله رَبًّا، وَبِالإسْلامِ دينًا، وَبِمُحَمَّدٍ صلي الله عليه وسلم نَبِيًّا",
    "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ شَرِّ مَا خَلَقَ",
    "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلا تَكِلْنِي إِلَى نَفْسِي طَرَفَةَ عَيْنٍ",
    "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ",
    "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ",
    "سُبْحـانَ اللهِ وَبِحَمْـدِهِ",
    "لا حَولَ وَلا قوّة إلاّ باللّهِ",
    " سُبْحَانَ اللهِ",
    "اللَّهُ أَكْبَرُ",
    "اللَهُمَّ صلِّ وسَلِم وبَارِك على سيدنا محمد (ﷺ)",
]

