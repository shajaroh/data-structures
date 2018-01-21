

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(index);

  if (Array.isArray(tupleArray)){
    for (var i = 0; i < tupleArray.length; i++){
      var tuple = tupleArray[i];

      if (tuple[0] === k){
        tupleArray[i] = [k, v];
      } else {
        tupleArray.push([k, v]);
      }
    }
  } else {
    this._storage.set(index, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(index);

  for (var i = 0; i < tupleArray.length; i++){
    var tuple = tupleArray[i];

    if (tuple[0] == k){
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(index);

  for (var i = 0; i < tupleArray.length; i++){
    var tuple = tupleArray[i];

    if (tuple[0] === k){
      tupleArray.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
