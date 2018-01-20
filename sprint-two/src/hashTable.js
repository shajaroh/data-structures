

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // if (this._storage.get(index) === undefined){
  //
  // }
  // 
  this._storage.set(index, v);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // var LimitedArray = function(limit) {
 //   var storage = [];
 //
 //   var limitedArray = {};
 //   limitedArray.get = function(index) {
 //     checkLimit(index);
 //     return storage[index];
 //   };
 //   limitedArray.set = function(index, value) {
 //     checkLimit(index);
 //     storage[index] = value;
 //   };
 //   limitedArray.each = function(callback) {
 //     for (var i = 0; i < storage.length; i++) {
 //       callback(storage[i], i, storage);
 //     }
 //   };
 //
 //   var checkLimit = function(index) {
 //     if (typeof index !== 'number') {
 //       throw new Error('setter requires a numeric index for its first argument');
 //     }
 //     if (limit <= index) {
 //       throw new Error('Error trying to access an over-the-limit index');
 //     }
 //   };
 //
 //   return limitedArray;
 // };
