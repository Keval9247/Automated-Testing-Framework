// popup.js
let isRecording = false;

// Start/Stop recording
document.getElementById("start-recording").addEventListener("click", () => {
    isRecording = !isRecording;
    const status = isRecording ? "Recording started" : "Recording stopped";
    console.log(status);
    alert(status);
});

// Export recorded actions
document.getElementById("export-data").addEventListener("click", () => {
    chrome.storage.local.get(["recordedActions"], (result) => {
        const recordedActions = result.recordedActions || [];
        if (recordedActions.length === 0) {
            alert("No actions recorded yet!");
            return;
        }

        const data = JSON.stringify(recordedActions, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "recorded-actions.json";
        a.click();

        alert("Actions exported successfully!");
    });
});
