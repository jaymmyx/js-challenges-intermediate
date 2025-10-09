class HashTable {
  constructor(limit) {
    this.storage = [];
    this.limit = 14;
  }

  _hash(key, max) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % max;
  }

  set(key, value) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
          break; // Early exit after update
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]); // Fix: push instead of overwrite
      }
    }
  }

  get(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    }

    // Search through the bucket for the key
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1]; // Return the value
      }
    }

    return undefined; // Key not found
  }

  remove(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    }

    // Find and remove the key-value pair
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        const removedValue = this.storage[index][i][1];

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
    // Hash the key to find the index
    const index = this._hash(key, this.limit);

    // Check if the bucket at the index exists
    if (this.storage[index]) {
      // Iterate through the bucket's key-value pairs
      for (let i = 0; i < this.storage[index].length; i++) {
        // Compare the current key with the target key
        if (this.storage[index][i][0] === key) {
          // If the key is found, return true
          return true;
        }
      }
    }

    // If the key is not found, return false
    return false;
  }

  printTable() {
    console.log(this.storage);
  }

  clear() {
    this.storage = [];
  }
}

module.exports = HashTable;
