function saveOptions() {
    const interval = document.getElementById('interval').value;
    chrome.storage.sync.set({
        favoriteInterval: +interval,
    }, function () {
        var status = document.getElementById('options-status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 1000);
    });
}

document.getElementById('save').addEventListener('click', saveOptions);