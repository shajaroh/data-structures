var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else {
      var current = list.head;

      while(current.next) {
        current = current.next;
      }

      current.next = newNode;
      list.tail = current.next;
    }
  };

  list.removeHead = function() {
    var keep = list.head.value;
    list.head = list.head.next;
    return keep;
  };

  list.contains = function(target) {
    var current = list.head;
    var isFound = false;

    while(current) {
      if(current.value === target) { //debugger;
        isFound = true;
      }
      current = current.next;
    }
    return isFound;
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
 test.addToTail("y");
 test.addToTail("z");
 console.log(test);
