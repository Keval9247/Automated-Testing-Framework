// content.js
document.addEventListener('click', (event) => {
  const target = event.target;
  const action = {
    type: "click",
    tag: target.tagName,
    id: target.id,
    classList: [...target.classList],
    text: target.textContent.trim()
  };

  chrome.runtime.sendMessage({ type: "record_action", action }, (response) => {
    console.log(response?.status || "Failed to send action.");
  });
});
