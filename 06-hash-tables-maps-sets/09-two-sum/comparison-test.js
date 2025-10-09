// Your solution - Brute Force
function yourSolution(arr, target) {
  let pointer = 0;

  while (pointer < arr.length - 1) {
    for (let i = pointer + 1; i < arr.length; i++) {
      if (arr[pointer] + arr[i] === target) {
        return [pointer, i];
      }
    }
    pointer++;
  }

  return [];
}

// Instructor's solution - Hash Map
function instructorSolution(nums, target) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }
    numSet.add(nums[i]);
  }

  return [];
}

// Optimized hash map solution
function optimizedSolution(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return [];
}

// Test cases
const testCases = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
  [[1, 2, 3, 4, 5], 8],
  [[5, 5, 5, 5], 10],
  [[], 5],
  [[1], 1],
];

console.log("=== Correctness Test ===");
testCases.forEach((test, i) => {
  const [arr, target] = test;
  const yourResult = yourSolution([...arr], target);
  const instructorResult = instructorSolution([...arr], target);
  const optimizedResult = optimizedSolution([...arr], target);

  console.log(`Test ${i + 1}: [${arr}], target: ${target}`);
  console.log(`  Your: [${yourResult}]`);
  console.log(`  Instructor: [${instructorResult}]`);
  console.log(`  Optimized: [${optimizedResult}]`);
  console.log(
    `  All match: ${
      JSON.stringify(yourResult) === JSON.stringify(instructorResult) &&
      JSON.stringify(instructorResult) === JSON.stringify(optimizedResult)
    }`
  );
  console.log();
});

console.log("=== Performance Test ===");
// Large array performance test
const largeArr = Array.from({ length: 10000 }, (_, i) => i);
const target = 19998; // Last two elements

console.time("Your Solution (Brute Force)");
for (let i = 0; i < 10; i++) {
  yourSolution([...largeArr], target);
}
console.timeEnd("Your Solution (Brute Force)");

console.time("Instructor Solution (Set)");
for (let i = 0; i < 1000; i++) {
  instructorSolution([...largeArr], target);
}
console.timeEnd("Instructor Solution (Set)");

console.time("Optimized Solution (Map)");
for (let i = 0; i < 1000; i++) {
  optimizedSolution([...largeArr], target);
}
console.timeEnd("Optimized Solution (Map)");

console.log("\n=== Complexity Analysis ===");
console.log("Your Solution:");
console.log("  Time: O(n²) - nested loops");
console.log("  Space: O(1) - constant space");

console.log("\nInstructor Solution:");
console.log("  Time: O(n²) worst case - indexOf is O(n)");
console.log("  Space: O(n) - Set storage");

console.log("\nOptimized Solution:");
console.log("  Time: O(n) - single pass");
console.log("  Space: O(n) - Map storage");
