//What is a Binary Search Tree ?
//A node based binary three data structure which has the following properties:
// -> Left subtree of a node contains only nodes with keys lesser than the node key
// -> Right subtree of a node contains only nodes with keys greater
// Finally the left and the right follow the meme principle, they are also a binary search tree



//1. Insert a node into a BTS

// Given node
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

}

//Function to insert a new node with given key in BST

function insert(node, key) {

    //if three is empty, return a new node
    if (node == null) {
        return new Node(key);
    }

    //Otherwise, reccur down the tree
    if (key < node.key) {
        node.left = insert(node.left, key);
    }
    else if (key > node.key) {
        node.right = insert(node.right, key);
    }

    return node;

}

//function to do inorder traversal of bst 
function inorder(root) {
    if (root != null) {
        inorder(root.left);
        console.log(root.key + ' ');
        inorder (root.right);
    }
}

//Driver code

// Creating following bts

//       50
//      /  \
//     30  70
//   /   \    \
// 20   40     80

let root = null;

root = insert(root, 50);

root = insert (root, 30);


console.log(root);

// inorder(root);







/// // Binary search tree through an array which is sorted

// const arr = [1, 3, 5, 6, 7, 9, 10, 14];

// class Node {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

// function binarySearchTree(arr, start, end) {
//     if (start >= end) {
//         return null;
//     }
//     const mid = Math.floor((start + end) / 2);
//     const a = new Node(arr[mid]);

//    a.left = binarySearchTree(arr, start, mid);
//    a.right = binarySearchTree(arr, mid + 1, end);
//    return a;
// }


// const root = binarySearchTree(arr, 0, arr.length);

// console.log(root);