'use strict';

const steril = function (array) {
  let text = array;
  let script = "<script>";
  let scriptspace = "< script >";
  let splitted = text.split(/\s/);
  let result;
  for (let i = 0; i < splitted.length; i++) {
     if(splitted[i] === script || splitted[i] === scriptspace){
       result = false;
     }else{
       result = true;
     }
  }
   console.log(result);
}

module.exports = steril
