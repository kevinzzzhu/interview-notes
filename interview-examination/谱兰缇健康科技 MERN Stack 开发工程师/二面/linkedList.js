// linkedlist
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var node1 = new Node(1)
node1.next = new Node(2)
node1.next.next = new Node(3)

function printAllNodes(node){
    console.log(node.value)
    if (node.next){
        printAllNodes(node.next)
    }
}

printAllNodes(node1)

// reverse
function reverseNodes(node){
    if (node.next){
        var output = reverse(node.next, node)
    }
    node.next = null
    return output
}

function reverse(node, lastNode){
    if (node.next){
        var output = reverse(node.next, node)
    }
    else output = node
    node.next = lastNode
    return output
}

printAllNodes(reverseNodes(node1))