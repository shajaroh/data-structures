

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.indexOf(node) > -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  if (index > -1){
    this.nodes.splice(index, 1);
  }

  this.edges.forEach(function(ele, i, array){
    if (ele[0] === node || ele[1] === node){
      array.splice(i, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var bool = false;

  this.edges.forEach(function(ele){
    if (
      (ele[0] === fromNode && ele[1] === toNode) ||
      (ele[0] === toNode && ele[1] === fromNode)
    ){
      bool = true;
    }
  });
  return bool;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode,toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges.forEach(function(ele, i, array){
    if (ele[0] === fromNode && ele[1] === toNode){
      array.splice(i, 1);
    }
  });
  // this.edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(ele){
    cb(ele);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
