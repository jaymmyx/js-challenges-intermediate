const Stack = require("./stack");

const myStack = new Stack();

for (let i = 0; i < 1000; i++) {
  myStack.push(i);
}

console.log(myStack);

myStack.pop();

console.log(myStack);
