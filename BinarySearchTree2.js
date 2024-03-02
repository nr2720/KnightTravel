//1. un arr sorted

const arr = [1, 4, 6, 7, 10, 45, 67, 89, 100];

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function binarySearchTree(arr, start, end) {
    if(start >= end) {
        return null;
    }   
    const mid = Math.floor((start+end)/2);
    const node = new Node(arr[mid]);

    node.left = binarySearchTree(arr, start, mid);
    node.right = binarySearchTree(arr, mid + 1, end);

    return node;
}

const root = binarySearchTree(arr, 0, arr.length);

console.log(root);



