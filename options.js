let userAzkar = []

function saveOptions() {
    const interval = document.getElementById('interval').value;
    chrome.storage.sync.set({
        favoriteInterval: +interval,
        userAzkar,
    }, function () {
        const status = document.getElementById('options-status');
        status.classList.remove("hidden")
        setTimeout(function () {
            status.classList.add("hidden")
        }, 1500);
    });
}


chrome.storage.sync.get((result) => {
    userAzkar = result.userAzkar || []
    document.getElementById('interval').value = result.favoriteInterval || "15"
    userAzkar.forEach((el) => {
        renderZekr(el)
    })
})

function addCustomZekr() {
    const value = document.getElementById('zekr-input').value
    if (value.trim()) {
        const zekr = { value, id: new Date().getTime() };
        userAzkar = [...userAzkar, zekr]
        renderZekr(zekr)
        document.getElementById('zekr-input').value = ""
    }
}

function renderZekr(zekr) {
    const node = document.createElement("div");
    node.className = 'zekr-container'

    const zekrTxtContainer = document.createElement("p");
    const content = document.createTextNode(zekr.value);
    zekrTxtContainer.appendChild(content);

    const removeIcon = document.createElement("span")
    const icon = document.createTextNode("\u00D7");
    removeIcon.appendChild(icon);
    removeIcon.className = 'remove-icon-container'
    removeIcon.id = `_${zekr.id}`
    removeIcon.addEventListener('click', deleteZekr);

    node.appendChild(zekrTxtContainer);
    node.appendChild(removeIcon);

    document.getElementById("user-azkar").appendChild(node);
}

function deleteZekr(e) {
    const zekrId = e.target.id.replace("_", '')
    userAzkar = userAzkar.filter((el) => +el.id !== +zekrId)
    e.target.parentElement.remove()
}

document.getElementById('save').addEventListener('click', saveOptions);

document.getElementById('add-custom-zekr').addEventListener('click', addCustomZekr);
