
//console.log("Background Loaded");

chrome.runtime.onMessage.addListener((message, sender) => {

    //console.log("Received message:", message);

    if (message.action === "openIncognito") {

        chrome.system.display.getInfo((displays) => {

            const display = displays[0];

            // Quarter of the usable screen
            const width = Math.floor(display.workArea.width / 3);
            const height = Math.floor(display.workArea.height / 2);

            // Bottom-right corner
            const left = display.workArea.left + display.workArea.width - width;
            const top = display.workArea.top + display.workArea.height - height;

            chrome.windows.create(
                {
                    url: "https://chat.com",
                    incognito: true,
                    type: "popup",
                    width,
                    height,
                    left,
                    top
                },
                (createdWindow) => {
                    if (chrome.runtime.lastError) {
                        //console.error(chrome.runtime.lastError.message);
                    } else {
                       // console.log("Popup created:", createdWindow);
                    }
                }
            );

        });

    }

});