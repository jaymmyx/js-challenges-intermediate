const { LinkedList } = require("./linked-list");

function reverseStringLinkedList(str) {
  const linkedList = new LinkedList();
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str.charAt(i);
    linkedList.add(char);
  }
  let reversedString = "";
  let current = linkedList.head;
  while (current !== null) {
    reversedString += current.data;
    current = current.next;
  }
  return reversedString;
}

module.exports = reverseStringLinkedList;
