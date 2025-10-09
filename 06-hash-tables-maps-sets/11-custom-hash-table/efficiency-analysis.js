// ANALYSIS: Your Hash Table Issues

// Issue #1: get() method always returns undefined!
function yourBrokenGet(key) {
  const index = this._hash(key, this.limit);
  return undefined; // ❌ This line completely breaks the method!
}

// Issue #2: set() method overwrites instead of appending
function yourBrokenSet(key, value) {
  const index = this._hash(key, this.limit);
  if (this.storage[index] === undefined) {
    this.storage[index] = [[key, value]];
  } else {
    let inserted = false;
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index][i][1] = value;
        inserted = true;
      }
    }
    if (inserted === false) {
      this.storage[index][0] = [key, value]; // ❌ Overwrites index 0 instead of pushing!
    }
  }
}

// Issue #3: remove() method has logic errors and tries to access undefined
function yourBrokenRemove(key) {
  const index = this._hash(key, this.limit);

  if (this.storage[index]) {
    if (this.storage[index] === undefined) {
      // ❌ Redundant check - already checked above!
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1]; // ❌ Returns value but doesn't remove!
        }
      }
    }
  }

  // ❌ These lines will crash if storage[index] is undefined
  if (this.storage[index].length && this.storage[index][0][0] === key) {
    delete this.storage[index];
  }

  for (let i = 0; i < this.storage[index].length; i++) {
    if (this.storage[index][i][0] === key) {
      delete this.storage[index][i]; // ❌ Creates holes in array
    }
  }
}

// CORRECTED IMPLEMENTATIONS

class EfficientHashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  // FIXED: Efficient set method
  set(key, value) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      // Check if key exists and update
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          return; // Early exit after update
        }
      }
      // Key doesn't exist, append new pair
      this.storage[index].push([key, value]); // ✅ Push instead of overwrite
    }
  }

  // FIXED: Efficient get method
  get(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    }

    // Search through bucket
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1]; // ✅ Actually return the value!
      }
    }

    return undefined; // Key not found
  }

  // FIXED: Efficient remove method
  remove(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    }

    // Find and remove the key-value pair
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        const removedValue = this.storage[index][i][1];

        // Remove element properly
        if (this.storage[index].length === 1) {
          // Only one element, delete entire bucket
          delete this.storage[index];
        } else {
          // Multiple elements, splice out the specific one
          this.storage[index].splice(i, 1);
        }

        return removedValue;
      }
    }

    return undefined; // Key not found
  }

  has(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return false;
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return true;
      }
    }

    return false;
  }

  printTable() {
    console.log(this.storage);
  }

  clear() {
    this.storage = [];
  }
}

// ULTRA-OPTIMIZED VERSION
class UltraOptimizedHashTable {
  constructor(limit = 14) {
    this.storage = new Array(limit); // Pre-allocate array
    this.limit = limit;
    this.size = 0; // Track number of elements
  }

  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % max; // Better hash distribution
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key, this.limit);

    if (!this.storage[index]) {
      this.storage[index] = [[key, value]];
      this.size++;
    } else {
      // Use for loop with early exit for better performance
      const bucket = this.storage[index];
      for (let i = 0, len = bucket.length; i < len; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      bucket.push([key, value]);
      this.size++;
    }
  }

  get(key) {
    const index = this._hash(key, this.limit);
    const bucket = this.storage[index];

    if (!bucket) return undefined;

    // Optimized search
    for (let i = 0, len = bucket.length; i < len; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this._hash(key, this.limit);
    const bucket = this.storage[index];

    if (!bucket) return undefined;

    for (let i = 0, len = bucket.length; i < len; i++) {
      if (bucket[i][0] === key) {
        const value = bucket[i][1];

        if (len === 1) {
          this.storage[index] = undefined; // Clear bucket
        } else {
          bucket.splice(i, 1); // Remove element
        }

        this.size--;
        return value;
      }
    }

    return undefined;
  }

  // Additional optimization methods
  loadFactor() {
    return this.size / this.limit;
  }

  has(key) {
    return this.get(key) !== undefined;
  }
}

// Performance comparison
console.log("=== HASH TABLE EFFICIENCY ANALYSIS ===\n");

const testOperations = [
  ["set", "key1", "value1"],
  ["set", "key2", "value2"],
  ["set", "key3", "value3"],
  ["get", "key2"],
  ["get", "key1"],
  ["set", "key1", "newValue1"], // Update
  ["get", "key1"],
  ["remove", "key2"],
  ["get", "key2"], // Should be undefined
  ["has", "key3"],
];

function testHashTable(HashTableClass, name) {
  console.log(`Testing ${name}:`);
  const ht = new HashTableClass(8);

  console.time(`${name} Operations`);

  testOperations.forEach(([op, key, value]) => {
    if (op === "set") {
      ht.set(key, value);
    } else if (op === "get") {
      const result = ht.get(key);
      console.log(`  get('${key}') = ${result}`);
    } else if (op === "remove") {
      const result = ht.remove(key);
      console.log(`  remove('${key}') = ${result}`);
    } else if (op === "has") {
      const result = ht.has(key);
      console.log(`  has('${key}') = ${result}`);
    }
  });

  console.timeEnd(`${name} Operations`);
  console.log();
}

testHashTable(EfficientHashTable, "Fixed Hash Table");
testHashTable(UltraOptimizedHashTable, "Ultra-Optimized Hash Table");

console.log("=== COMPLEXITY ANALYSIS ===");
console.log("Your Original Issues:");
console.log("  get(): O(1) → O(∞) (always returns undefined!)");
console.log("  set(): O(1) → O(n) (overwrites on collision instead of append)");
console.log("  remove(): O(1) → O(∞) (crashes on undefined access)");

console.log("\nFixed Version:");
console.log("  get(): O(1) average, O(n) worst case");
console.log("  set(): O(1) average, O(n) worst case");
console.log("  remove(): O(1) average, O(n) worst case");

console.log("\nUltra-Optimized Version:");
console.log("  get(): O(1) average, O(n) worst case (better hash function)");
console.log("  set(): O(1) average, O(n) worst case (pre-allocated arrays)");
console.log("  remove(): O(1) average, O(n) worst case (optimized loops)");
