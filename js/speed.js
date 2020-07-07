browser.runtime.onMessage.addListener(getSpeed);

function getSpeed(request, sender, sendResponse) {
    let speed = document.getElementsByClassName('video-stream html5-main-video')[0].playbackRate;
    browser.runtime.onMessage.removeListener(getSpeed);
    sendResponse({ speed });
}
