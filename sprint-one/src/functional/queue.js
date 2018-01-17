var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    var val = storage[front]
    delete storage[front]
    front++;
    return val;
    
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
   
  };

  return someInstance;
};
