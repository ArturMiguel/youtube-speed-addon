browser.runtime.onMessage.addListener((handleSpeed));

function handleSpeed(request, sender, sendResponse) {
    let speed = document.getElementsByClassName('video-stream html5-main-video')[0].playbackRate;
    browser.runtime.onMessage.removeListener(handleSpeed);
    sendResponse({ speed });
}
