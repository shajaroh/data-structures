var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;
  Object.assign(someInstance, stackMethods)
  
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
	this.storage[this.count] = value;
	this.count++;
}
stackMethods.pop = function() {
	this.count--;
	return this.storage[this.count];
}

stackMethods.size = function() {
	if(this.count < 0) {
		return 0;
	}
	return this.count;
}