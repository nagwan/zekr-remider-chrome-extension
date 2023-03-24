import azkar from "./azkar.js"


const zekr = azkar[Math.floor(Math.random() * azkar.length)];
document.getElementById("zekr").innerHTML = zekr;


document.querySelector('#go-to-options').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});
