


const bloomFilter = function(size) {
    // Create a new bit array of the given size
    const bitArray = new Array(size).fill(0);
  
    // Define the hashing functions to use
    const hashFunctions = [
      function(item) {
        // Hash function 1
        return item.split("").reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
          }, 0);
      },
      function(str) {
        // Hash function 2
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash + str.charCodeAt(i)) % size;
        }
        return hash;
      },
    ];
  
    // Add an item to the filter
    this.add = function(item) {
      // For each of the hash functions, calculate the hash value
      // of the item and set the corresponding bit in the bit array to 1
      hashFunctions.forEach(function(hashFunction) {
        const index = hashFunction(item);
        bitArray[index] = 1;
      });
      console.log("in add hash sunction");
    };
  
    // Check if an item is in the filter
    this.check = function(item) {
      // For each of the hash functions, calculate the hash value
      // of the item and check if the corresponding bit in the bit
      // array is set to 1. If any of the bits is 0, return false
      // because the item definitely is not in the filter.
      // Otherwise, return true because the item might be in the filter.
      let isPossiblyInFilter = true;
      hashFunctions.forEach(function(hashFunction) {
        const index = hashFunction(item);
        if (bitArray[index] === 0) {
          isPossiblyInFilter = false;
        }
        console.log(item,index,isPossiblyInFilter);
      });
      return isPossiblyInFilter;
    };

    return this
  };
  
module.exports.setUpBloomFilter = (size)=> {
    const bloom = bloomFilter(size)

    this.add = function(item) {
        bloom.add(item)
    };

    this.check = function(item) {
        return bloom.check(item)
    };

    return this
}