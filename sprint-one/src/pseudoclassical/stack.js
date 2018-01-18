var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.



  // Use an object with numeric keys to store values
  this.storage = {};
  this.count = 0;
}

  // Implement the methods below
  Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  Stack.prototype.pop = function() {
    this.count--;
    return this.storage[this.count];
  };

  Stack.prototype.size = function() {
    if(this.count < 0) {
      return 0;
    } 
    return this.count;
  };





