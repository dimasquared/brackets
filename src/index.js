module.exports = function check(str, bracketsConfig) {

  let strArray = str.split('');
  let strArrayLength = strArray.length;
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];
  const bracketsConfigLength = bracketsConfig.length;

  if (strArrayLength%2 != 0) return false;

  for (let i = 0; i < bracketsConfigLength; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < strArrayLength; i++) {

    if (openBrackets.includes(strArray[i]) && closeBrackets.includes(strArray[i])) {
      if (openBrackets.indexOf(stack[stack.length-1]) == closeBrackets.indexOf(strArray[i])) stack.pop();
        else stack.push(strArray[i]);
    } else {
      if (openBrackets.includes(strArray[i])) stack.push(strArray[i]);
        else if (openBrackets.indexOf(stack[stack.length-1]) == closeBrackets.indexOf(strArray[i])) stack.pop();
          else return false;
      }
  }

  if (stack.length == 0) return true;
  else return false;

}
