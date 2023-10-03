document.addEventListener("DOMContentLoaded", function() {
    // Load saved options
    chrome.storage.sync.get(["buttonColor", "buttonSize", "apiKeyChatGPT"], function(data) {
        if (data.buttonColor) {
            document.getElementById("buttonColor").value = data.buttonColor;
        }
        if (data.buttonSize) {
            document.getElementById("buttonSize").value = data.buttonSize;
        }
        if (data.apiKeyChatGPT) {
            document.getElementById("apiKeyChatGPT").value = data.apiKeyChatGPT;
        }
    });

    // Save options
    document.getElementById("saveButton").addEventListener("click", function() {
        var buttonColor = document.getElementById("buttonColor").value;
        var buttonSize = document.getElementById("buttonSize").value;
        var apiKeyChatGPT = document.getElementById("apiKeyChatGPT").value;

        chrome.storage.sync.set({ "buttonColor": buttonColor, "buttonSize": buttonSize,
            "apiKeyChatGPT": apiKeyChatGPT }, function() {
            alert("Options saved!");
        });
    });
});
