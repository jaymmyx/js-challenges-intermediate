const Stack = require("./stack");

function reverseStringStack(str) {
  const strStack = new Stack();
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    strStack.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    reversedStr += strStack.pop();
  }
  return reversedStr;
}

module.exports = reverseStringStack;
