// Your solution vs Instructor's - They're identical!
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

// Alternative approaches for comparison
function sortingApproach(nums) {
  if (nums.length === 0) return 0;

  const uniqueNums = [...new Set(nums)].sort((a, b) => a - b);
  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < uniqueNums.length; i++) {
    if (uniqueNums[i] === uniqueNums[i - 1] + 1) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }

  return Math.max(maxLength, currentLength);
}

// KILLER APPROACH: Range Compression with Map
function killerRangeCompression(nums) {
  if (nums.length === 0) return 0;

  const ranges = new Map(); // num -> [start, end] of its range
  let maxLength = 0;

  for (const num of new Set(nums)) {
    if (ranges.has(num)) continue;

    let start = num;
    let end = num;

    // Check if we can extend left
    if (ranges.has(num - 1)) {
      const [leftStart] = ranges.get(num - 1);
      start = leftStart;
    }

    // Check if we can extend right
    if (ranges.has(num + 1)) {
      const [, rightEnd] = ranges.get(num + 1);
      end = rightEnd;
    }

    // Update all numbers in the new range
    for (let i = start; i <= end; i++) {
      ranges.set(i, [start, end]);
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// ULTIMATE KILLER: Segment Tree approach (overkill but fun)
class SegmentTree {
  constructor(nums) {
    this.compressed = this.compress(nums);
    this.tree = new Array(4 * this.compressed.length).fill(0);
    this.build(1, 0, this.compressed.length - 1);
  }

  compress(nums) {
    return [...new Set(nums)].sort((a, b) => a - b);
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = 1;
    } else {
      const mid = Math.floor((start + end) / 2);
      this.build(2 * node, start, mid);
      this.build(2 * node + 1, mid + 1, end);
    }
  }

  query(node, start, end, l, r) {
    if (r < start || end < l) return 0;
    if (l <= start && end <= r) return this.tree[node];

    const mid = Math.floor((start + end) / 2);
    return (
      this.query(2 * node, start, mid, l, r) +
      this.query(2 * node + 1, mid + 1, end, l, r)
    );
  }

  findLongestConsecutive() {
    let maxLength = 0;

    for (let i = 0; i < this.compressed.length; i++) {
      let length = 1;
      let j = i;

      while (
        j + 1 < this.compressed.length &&
        this.compressed[j + 1] === this.compressed[j] + 1
      ) {
        length++;
        j++;
      }

      maxLength = Math.max(maxLength, length);
      i = j; // Skip processed elements
    }

    return maxLength;
  }
}

function segmentTreeApproach(nums) {
  if (nums.length === 0) return 0;
  const st = new SegmentTree(nums);
  return st.findLongestConsecutive();
}

// GENIUS APPROACH: Interval Merging
function intervalMerging(nums) {
  if (nums.length === 0) return 0;

  const uniqueNums = [...new Set(nums)].sort((a, b) => a - b);
  const intervals = [];

  let start = uniqueNums[0];
  let end = uniqueNums[0];

  for (let i = 1; i < uniqueNums.length; i++) {
    if (uniqueNums[i] === end + 1) {
      end = uniqueNums[i];
    } else {
      intervals.push([start, end]);
      start = end = uniqueNums[i];
    }
  }
  intervals.push([start, end]);

  return Math.max(...intervals.map(([s, e]) => e - s + 1));
}

// ULTIMATE OPTIMIZATION: Bitmask approach (for small ranges)
function bitmaskApproach(nums) {
  if (nums.length === 0) return 0;

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  // Only efficient for small ranges
  if (max - min > 100000) return yourSolution(nums);

  const bitmask = new Array(max - min + 1).fill(false);

  for (const num of nums) {
    bitmask[num - min] = true;
  }

  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < bitmask.length; i++) {
    if (bitmask[i]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 0;
    }
  }

  return maxLength;
}

// Test all approaches
const testCases = [
  [100, 4, 200, 1, 3, 2],
  [0, 3, 7, 2, 5, 8, 4, 6, 9, 1],
  [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6],
  [],
  [1],
  [1, 2, 3, 4, 5],
];

console.log("=== KILLER APPROACHES COMPARISON ===\\n");

testCases.forEach((test, i) => {
  console.log(
    `Test ${i + 1}: [${test.slice(0, 8)}${test.length > 8 ? "..." : ""}]`
  );

  const results = {
    "Your/Instructor": yourSolution(test),
    Sorting: sortingApproach(test),
    "Range Compression": killerRangeCompression(test),
    "Segment Tree": segmentTreeApproach(test),
    "Interval Merge": intervalMerging(test),
    Bitmask: bitmaskApproach(test),
  };

  Object.entries(results).forEach(([name, result]) => {
    console.log(`  ${name}: ${result}`);
  });

  const allSame = Object.values(results).every(
    (r) => r === results["Your/Instructor"]
  );
  console.log(`  ✓ All correct: ${allSame}\\n`);
});

console.log("=== PERFORMANCE SHOWDOWN ===");
const perfTest = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 50000)
);

console.time("Your Solution (Hash Set)");
for (let i = 0; i < 100; i++) yourSolution([...perfTest]);
console.timeEnd("Your Solution (Hash Set)");

console.time("Sorting Approach");
for (let i = 0; i < 100; i++) sortingApproach([...perfTest]);
console.timeEnd("Sorting Approach");

console.time("Range Compression");
for (let i = 0; i < 10; i++) killerRangeCompression([...perfTest]);
console.timeEnd("Range Compression");

console.time("Interval Merging");
for (let i = 0; i < 100; i++) intervalMerging([...perfTest]);
console.timeEnd("Interval Merging");

console.time("Bitmask (if applicable)");
for (let i = 0; i < 100; i++) bitmaskApproach([...perfTest]);
console.timeEnd("Bitmask (if applicable)");

console.log("\\n=== COMPLEXITY ANALYSIS ===");
console.log("Your Solution:     O(n) time, O(n) space - OPTIMAL");
console.log("Sorting:           O(n log n) time, O(n) space");
console.log("Range Compression: O(n²) time, O(n) space");
console.log("Interval Merge:    O(n log n) time, O(n) space");
console.log("Bitmask:           O(n + range) time, O(range) space");
console.log("\\n🏆 WINNER: Your/Instructor Hash Set Approach! 🏆");
