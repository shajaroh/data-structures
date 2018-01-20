var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(
    {
      "value" : value,
      "children" : [],
      "addChild" : this.addChild
    }
  );
};

treeMethods.contains = function(target) {
  var isFound = false;

  (function traverseTree(node){
    if (node.value === target){
      isFound = true;
    } else {
      node.children.forEach(function(obj){
        traverseTree(obj);
      });
    }
  })(this);

  return isFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
