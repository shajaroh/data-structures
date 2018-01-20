

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({ "value" : node, "edge" : null });
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  this.nodes.forEach(function(obj){
    if (obj.value === node){
      return true;
    }
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var key in this){
  //   if (this[key] === node){
  //     delete this[key];
  //   }
  // }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var test = new Graph();
//
// test.addNode(1);
// //test.contains(1);
//
// console.log(test);
