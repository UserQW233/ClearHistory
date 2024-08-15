chrome.runtime.onStartup.addListener(() => {
    chrome.browsingData.remove({}, {
        "history": true,
        "downloads": true
    }, () => {
        console.log("Browsing and download history cleared on startup.");
    });
});

chrome.runtime.onSuspend.addListener(() => {
    chrome.browsingData.remove({}, {
        "history": true,
        "downloads": true
    }, () => {
        console.log("Browsing and download history cleared on suspend.");
    });
});
