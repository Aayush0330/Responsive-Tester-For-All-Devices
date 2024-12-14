document.getElementById('testButton').addEventListener('click', function() {
    const device = document.getElementById('device').value.split('x');
    const width = parseInt(device[0]);
    const height = parseInt(device[1]);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.windows.create({
            url: tabs[0].url,
            type: 'popup',
            width: width,
            height: height
        });
    });
});

document.getElementById('customTestButton').addEventListener('click', function() {
    const customWidth = parseInt(document.getElementById('customWidth').value);
    const customHeight = parseInt(document.getElementById('customHeight').value);

    if (!isNaN(customWidth) && !isNaN(customHeight)) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.windows.create({
                url: tabs[0].url,
                type: 'popup',
                width: customWidth,
                height: customHeight
            });
        });
    } else {
        alert('Please enter valid dimensions.');
    }
});