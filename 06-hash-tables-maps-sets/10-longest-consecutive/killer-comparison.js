// Your solution - Optimal Hash Set approach
function yourSolution(nums) {
  const numsSet = new Set(nums);
  let longestSeq = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentNum = num;
      let currentSeq = 1;
      while (numsSet.has(currentNum + 1)) {
        currentSeq++;
        currentNum++;
      }
      longestSeq = Math.max(longestSeq, currentSeq);
    }
  }

  return longestSeq;
}

// Instructor's solution - Same optimal approach
function instructorSolution(nums) {
  const numSet = new Set(nums);
  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}

// Naive sorting approach (for comparison)
function sortingApproach(nums) {
  if (nums.length === 0) return 0;

  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }

  return Math.max(maxLength, currentLength);
}

// Brute force approach (checking every possible sequence)
function bruteForceApproach(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
    let length = 1;
    let current = num;

    // Check forward
    while (numSet.has(current + 1)) {
      length++;
      current++;
    }

    // Check backward
    current = num;
    while (numSet.has(current - 1)) {
      length++;
      current--;
    }

    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

// Ultra-optimized approach with early termination
function ultraOptimized(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  const numSet = new Set(nums);
  let maxLength = 0;

  // Early termination if we can't beat current max
  if (maxLength >= numSet.size) return maxLength;

  for (const num of numSet) {
    // Skip if this can't be better than current max
    if (numSet.size - Array.from(numSet).indexOf(num) <= maxLength) break;

    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentLength++;
        currentNum++;

        // Early termination if we found a very long sequence
        if (currentLength > numSet.size / 2) {
          return currentLength; // Likely the longest possible
        }
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

// Union-Find approach (overkill but interesting)
class UnionFind {
  constructor(nums) {
    this.parent = new Map();
    this.size = new Map();

    for (const num of nums) {
      this.parent.set(num, num);
      this.size.set(num, 1);
    }
  }

  find(x) {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.size.get(rootX) < this.size.get(rootY)) {
        this.parent.set(rootX, rootY);
        this.size.set(rootY, this.size.get(rootY) + this.size.get(rootX));
      } else {
        this.parent.set(rootY, rootX);
        this.size.set(rootX, this.size.get(rootX) + this.size.get(rootY));
      }
    }
  }

  getMaxSize() {
    return Math.max(...this.size.values());
  }
}

function unionFindApproach(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  const uf = new UnionFind(numSet);

  for (const num of numSet) {
    if (numSet.has(num + 1)) {
      uf.union(num, num + 1);
    }
  }

  return uf.getMaxSize();
}

// Test cases
const testCases = [
  [100, 4, 200, 1, 3, 2],
  [0, 3, 7, 2, 5, 8, 4, 6, 9, 1],
  [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6],
  [],
  [1],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 3, 5, 7, 9],
];

console.log("=== Correctness Test ===");
testCases.forEach((test, i) => {
  const yourResult = yourSolution(test);
  const instructorResult = instructorSolution(test);
  const sortingResult = sortingApproach(test);
  const bruteForceResult = bruteForceApproach(test);
  const ultraResult = ultraOptimized(test);
  const unionFindResult = unionFindApproach(test);

  console.log(
    `Test ${i + 1}: [${test.slice(0, 10)}${test.length > 10 ? "..." : ""}]`
  );
  console.log(
    `  Your: ${yourResult}, Instructor: ${instructorResult}, Sorting: ${sortingResult}`
  );
  console.log(
    `  Brute: ${bruteForceResult}, Ultra: ${ultraResult}, UnionFind: ${unionFindResult}`
  );
  console.log(
    `  All match: ${[
      yourResult,
      instructorResult,
      sortingResult,
      bruteForceResult,
      ultraResult,
      unionFindResult,
    ].every((r) => r === yourResult)}`
  );
  console.log();
});

console.log("=== Performance Test ===");
// Large array performance test
const largeArray = [];
for (let i = 0; i < 10000; i++) {
  largeArray.push(Math.floor(Math.random() * 50000));
}

console.time("Your Solution");
for (let i = 0; i < 100; i++) {
  yourSolution([...largeArray]);
}
console.timeEnd("Your Solution");

console.time("Instructor Solution");
for (let i = 0; i < 100; i++) {
  instructorSolution([...largeArray]);
}
console.timeEnd("Instructor Solution");

console.time("Sorting Approach");
for (let i = 0; i < 10; i++) {
  sortingApproach([...largeArray]);
}
console.timeEnd("Sorting Approach");

console.time("Union Find");
for (let i = 0; i < 10; i++) {
  unionFindApproach([...largeArray]);
}
console.timeEnd("Union Find");

console.log("\n=== Space Complexity Test ===");
const memoryBefore = process.memoryUsage().heapUsed;
yourSolution(largeArray);
const memoryAfter = process.memoryUsage().heapUsed;
console.log(
  `Your solution memory usage: ${(memoryAfter - memoryBefore) / 1024 / 1024} MB`
);
