var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;

  return someInstance;
};



var queueMethods = {};

  queueMethods.enqueue = function(value) {
    this.storage[this.back] = value;
    this.back++;
  };

  queueMethods.dequeue = function() {
    var val = this.storage[this.front]
    delete this.storage[this.front]
    this.front++;
    return val;
    
  };

  queueMethods.size = function() {
    return Object.keys(this.storage).length;
  };

