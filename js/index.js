document.addEventListener('DOMContentLoaded', (e) => {
    browser.tabs.executeScript(null, {
        file: '../js/speed.js'
    }).then(() => {
        browser.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {}).then((response) => {
                document.getElementById('speed').textContent = response.speed;
            });
        });
    });
});

document.addEventListener('click', (e) => {
    const option = e.target.className;
    if (option !== 'increment' && option !== 'decrement') return;

    browser.tabs.executeScript(null, {
        file: '../js/change.js'
    }).then(() => {
        browser.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, { option }).then((response) => {
                document.getElementById('speed').textContent = response.speed;
            });
        });
    });
});
