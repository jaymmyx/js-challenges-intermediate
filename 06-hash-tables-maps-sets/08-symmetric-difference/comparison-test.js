// Your solution
function yourSolution(arr1, arr2) {
  const symmetricSet = new Set(arr1);
  const set2 = new Set(arr2);

  for (const num of set2) {
    if (symmetricSet.has(num)) {
      symmetricSet.delete(num);
    } else {
      symmetricSet.add(num);
    }
  }
  return [...symmetricSet];
}

// Instructor's solution
function instructorSolution(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const num of arr1) {
    if (!set2.has(num)) {
      result.push(num);
    }
  }

  for (const num of arr2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

// Test cases
const testCases = [
  [
    [1, 2, 3],
    [3, 4, 5],
  ],
  [
    [1, 2, 2, 3, 4],
    [2, 3, 3, 4, 5],
  ],
  [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
];

console.log("=== Correctness Test ===");
testCases.forEach((test, i) => {
  const [arr1, arr2] = test;
  const yourResult = yourSolution(arr1, arr2);
  const instructorResult = instructorSolution(arr1, arr2);

  console.log(`Test ${i + 1}:`);
  console.log(`  Input: [${arr1}], [${arr2}]`);
  console.log(`  Your: [${yourResult}]`);
  console.log(`  Instructor: [${instructorResult}]`);
  console.log(
    `  Same result: ${
      JSON.stringify(yourResult.sort()) ===
      JSON.stringify(instructorResult.sort())
    }`
  );
  console.log();
});

console.log("=== Performance Test ===");
// Large arrays for performance testing
const largeArr1 = Array.from({ length: 10000 }, (_, i) => i);
const largeArr2 = Array.from({ length: 10000 }, (_, i) => i + 5000);

console.time("Your Solution");
for (let i = 0; i < 1000; i++) {
  yourSolution(largeArr1, largeArr2);
}
console.timeEnd("Your Solution");

console.time("Instructor Solution");
for (let i = 0; i < 1000; i++) {
  instructorSolution(largeArr1, largeArr2);
}
console.timeEnd("Instructor Solution");

console.log("\n=== Order Preservation Test ===");
const orderTest1 = [1, 2, 3];
const orderTest2 = [4, 5, 6];
console.log("Your order:", yourSolution(orderTest1, orderTest2));
console.log("Instructor order:", instructorSolution(orderTest1, orderTest2));
