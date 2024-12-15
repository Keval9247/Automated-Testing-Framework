// background.js
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.type === "record_action") {
//       console.log("Action recorded:", message.action);
//       // Store the action or send it to a server
//     }
//     sendResponse({ status: "Action received" });
//   });


// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "record_action") {
    console.log("Action recorded:", message.action);

    // Retrieve existing actions from storage
    chrome.storage.local.get(["recordedActions"], (result) => {
      const recordedActions = result.recordedActions || [];
      recordedActions.push(message.action); // Add new action

      // Save updated actions back to storage
      chrome.storage.local.set({ recordedActions }, () => {
        console.log("Actions updated:", recordedActions);
      });
    });

    sendResponse({ status: "Action received and recorded" });
  }
});
