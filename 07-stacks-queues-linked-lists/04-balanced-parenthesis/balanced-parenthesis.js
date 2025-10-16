const Stack = require("./stack");

function balancedParenthesis(str) {
  const parenthesisStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      parenthesisStack.push(str[i]);
    } else {
      if (parenthesisStack.isEmpty()) {
        return false;
      } else {
        parenthesisStack.pop();
      }
    }
    console.log(parenthesisStack);
  }
  return parenthesisStack.isEmpty();
}

module.exports = balancedParenthesis;
