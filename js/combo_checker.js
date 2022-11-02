// var keys = []
// var typingTimer;
// var endTypingInterval = 500;
// var qcbL = ["83d","65d","83u","65u","74d","74u"];
// document.addEventListener("keydown", function(keydown_event){
//   var x = keydown_event.which || keydown_event.code;
//   clearTimeout(typingTimer);
//   keys.push(x.toString()+"d");
//   document.getElementById("combo_input").innerHTML = "The Unicode value is: " + keys;
// });
// document.addEventListener("keyup", function(keyup_event){
//   var y = keyup_event.which || keyup_event.code;
//   keys.push(y.toString()+"u");
//   clearTimeout(typingTimer);
//   document.getElementById("combo_input").innerHTML = "The Unicode value is: " + keys;
//   typingTimer = setTimeout(endTyping, endTypingInterval);
// });
// function endTyping(){
//   if (keys === qcbL){
//     document.getElementById("combo_input").innerHTML = "good.";
//   } else {
//     document.getElementById("combo_input").innerHTML = "Bad.<br/>Your input: " + keys + "<br/>Should be: " + qcbL;
//   }
//   keys = [];
// };
import {createMachine, interpret} from 'xstate';


const qcb = createMachine({
  id: 'light',
  initial: 'dir2_lightoff',
  states: {
    dir2_lighton: {
      entry: 'lighton',
      on: {
        SRANIE: 'dir2_lightoff',
      }
    },
    dir2_lightoff: {
      entry: 'lightoff',
      on: {
        SRANIE: 'dir2_lighton',
      }
    }
  },
  actions: {
    lighton: (context, event) => {
      console.log("lighton")
      document.getElementById("input1").classList.add("correct");
    },
    lightoff: (context, event) => {
      console.log("lightoff")
      document.getElementById("input1").classList.remove("correct");
    }
  }
});

const service = interpret(qcb);
service.start();
const piesevent ='SRANIE';
window.addEventListener('keydown', (event) => {
  service.send(piesevent);
  }
)
