const { LinkedList } = require("./linked-list");

const list = new LinkedList();

list.add(100);
list.add(200);
list.add(300);
list.add(400);
list.insertAt(3, 350);
list.removeFrom(4)

console.log(list.printAll());
