console.log("Youtube Info Panel Blocker Loaded");
function block() {
  document.querySelectorAll("ytd-info-panel-content-renderer")[0].remove();
  console.log("ytd-info-panel-content-reader Blocked!");
}
setTimeout(block, 1000);
