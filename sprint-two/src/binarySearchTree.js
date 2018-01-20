var BinarySearchTree = function(value) {
  var node = Object.create(BinarySearchTree.prototype);
  node.value = value;
  node.left = null;
  node.right = null;

  return node;

};

BinarySearchTree.prototype.insert = function(value) {
    // if  current node is less than the root node's .value
    if (value < this.value){
      // traverse left
      if (this.left){
        //if there is an object on left, insert onto current node
        this.left.insert(value);
      } else {
        // if the left .value is null, assign that value to left property
        // to create to node (generate new node with BinarySearchTree);
        this.left = BinarySearchTree(value);
      }
    }

    if (value > this.value){
      if (this.right){
        this.right.insert(value);
      } else {
        this.right = BinarySearchTree(value);
      }
    }

};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target){
    return true;
  }

  if (this.value < target){
    if (this.right){
      return this.right.contains(target);
    } else {
      return false;
    }
  }

  if (this.value > target){
    if (this.left){
      return this.left.contains(target);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function() {

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
