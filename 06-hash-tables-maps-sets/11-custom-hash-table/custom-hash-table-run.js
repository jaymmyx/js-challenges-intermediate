const HashTable = require("./custom-hash-table");

const customHash = new HashTable();

customHash.set("", "656-889-7433");
customHash.set("Jim", "656-889-7433");
customHash.set("Jim", "656-889-7430");

customHash.remove("");

// console.log(customHash.get(""));

customHash.printTable();
