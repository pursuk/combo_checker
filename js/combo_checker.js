var keys = []
var typingTimer;
var endTypingInterval = 500;
var qcbL = ["83d","65d","83u","65u","74d","74u"];
document.addEventListener("keydown", function(keydown_event){
  var x = keydown_event.which || keydown_event.code;
  clearTimeout(typingTimer);
  keys.push(x.toString()+"d");
  document.getElementById("combo_input").innerHTML = "The Unicode value is: " + keys;
});
document.addEventListener("keyup", function(keyup_event){
  var y = keyup_event.which || keyup_event.code;
  keys.push(y.toString()+"u");
  clearTimeout(typingTimer);
  document.getElementById("combo_input").innerHTML = "The Unicode value is: " + keys;
  typingTimer = setTimeout(endTyping, endTypingInterval);
});
function endTyping(){
  if (keys === qcbL){
    document.getElementById("combo_input").innerHTML = "good.";
  } else {
    document.getElementById("combo_input").innerHTML = "Bad. Your input: " + keys + " Should be: " + qcbL;
  }
  keys = [];
};
