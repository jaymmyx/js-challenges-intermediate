const Queue = require("./queue");

const reverseStringWithQueue = (str) => {
  const reverseQueue = new Queue();
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseQueue.enqueue(str[i]);
  }
  
  while (!reverseQueue.isEmpty()) {
    reversedStr += reverseQueue.peek();
    reverseQueue.dequeue();
  }

  return reversedStr;
};

module.exports = reverseStringWithQueue;
