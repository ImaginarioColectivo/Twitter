var textarea = document.getElementById("textarea");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};