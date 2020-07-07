browser.runtime.onMessage.addListener(changeSpeed);

function changeSpeed(request, sender, sendResponse) {
    const { option } = request;
    let speed = document.getElementsByClassName('video-stream html5-main-video')[0].playbackRate;

    if (option === 'increment') speed+= 0.25;
    else if (option === 'decrement' && speed > 0) speed-= 0.25;

    document.getElementsByClassName('video-stream html5-main-video')[0].playbackRate = speed;

    browser.runtime.onMessage.removeListener(changeSpeed);
    sendResponse({ speed });
}
