// var key_list = []
// var typingTimer;
// var endTypingInterval = 500;
// var qcbL = ["83d","65d","83u","65u","74d","74u"];
// document.addEventListener("keydown", function(keydown_event){
//   var x = keydown_event.which || keydown_event.code;
//   clearTimeout(typingTimer);
//   key_list.push(x.toString()+"d");
//   document.getElementById("combo_input").innerHTML = "The Unicode value is: " + key_list;
// });
// document.addEventListener("keyup", function(keyup_event){
//   var y = keyup_event.which || keyup_event.code;
//   key_list.push(y.toString()+"u");
//   clearTimeout(typingTimer);
//   document.getElementById("combo_input").innerHTML = "The Unicode value is: " + key_list;
//   typingTimer = setTimeout(endTyping, endTypingInterval);
// });
// function endTyping(){
//   if (key_list === qcbL){
//     document.getElementById("combo_input").innerHTML = "good.";
//   } else {
//     document.getElementById("combo_input").innerHTML = "Bad.<br/>Your input: " + key_list + "<br/>Should be: " + qcbL;
//   }
//   key_list = [];

// let key_list = [];
//   document.addEventListener("keydown", function(keydown_event){
//     key_list.push(keydown_event.code + "d");
//     let last_key = key_list[key_list.length - 1]
//     document.getElementById("combo_input").innerHTML = last_key
//     if (last_key === "key_listd") { qcb.keypress_2() }
// })

// const { createMachine, actions, interpret } = window.XState;
//
// const dir2Event = {
//   type: 'keydown',
//   key: 'KeyS'
// }
//
// const qcb = createMachine({
//   id: 'qcb',
//   initial: 'neutral',
//   states: {
//     neutral: {
//       on: { dir2Event: 'dir2'}
//     },
//     dir2: {
//       on: { DIR1: 'dir1' }
//     },
//     dir1: {
//       on: { DIR1: 'dir4', TIMER: 'neutral' }
//     },
//     dir4: {
//       type: 'final'
//     }
//   }
// });
