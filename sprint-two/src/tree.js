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
  // var node = {};
  // node.children = null;
  //
  // if (Object.keys(node).length === 0){
  //   node[0] = value;
  // } else {
  //   for (var key in node){
  //     if (key === undefined){
  //       node[key + 1] = {"value": value};
  //     }
  //   }
  // }
  // //node.value = value;
  // this.children = node;

  this.children.push(
    {"value": value}
  );
};

treeMethods.contains = function(target) {
};


var test = Tree("something");
test.addChild("something Else");
test.addChild("somethign Else Else")

console.log(test);

/*
 * Complexity: What is the time complexity of the above functions?
 */
