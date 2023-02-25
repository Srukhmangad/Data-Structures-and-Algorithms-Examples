class HashTable {
  constructor(size = 8) {
    this.buckets = new Array(size);
    this.size = size;
  }
  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; ++i) {
      sum += key.charCodeAt(i);
    }

    let hash = sum % this.size;
    // console.log(hash);

    return hash;
  }

  insert(key, value) {
    let h = this.hash(key);
    return (this.buckets[h] = value);
  }

  search(key) {
    return this.buckets[this.hash(key)];
  }
}

const newInstance = new HashTable(9);
newInstance.insert("101", "Anuj");
newInstance.insert("102", "Shakul");
newInstance.insert("103", "Malik");
newInstance.insert("301", "Agrawal");
console.log(newInstance.search("101"));
console.log(newInstance.search("301"));
// newInstance.hash("101");
console.log(newInstance);
