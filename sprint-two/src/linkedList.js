var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head){
      list.head = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = function() {
    delete list.head;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var test = LinkedList();

 test.addToTail("x");
 //test.addToTail(Node("y"));

 console.log(test);
