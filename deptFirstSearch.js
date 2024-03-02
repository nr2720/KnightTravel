class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function bST(arr, start, end) {
    if (start >= end) {
        return null;
    }
    const mid = Math.floor((start+end)/2);
    const node = new Node(arr[mid]);

    node.left = bST(arr, start, mid);
    node.right = bST(arr, mid + 1, end);

    return node;
}

const arr = [1, 4, 5, 10, 34, 45, 63, 100];

const root = bST(arr, 0, arr.length);


//Depth First Search (inorder, preorder, postOrder)


//1. Inorder traversal (en ordre, du plus grand au plus petit)

function displayInorder(root) {
    if (root === null) {
        return;
    }
    displayInorder(root.left);
    console.log(root.key);
    displayInorder(root.right);
}

console.log(root);


//2. Preorder Traversal 
// a) visit the root and print the data
// b) traverse left
// c) traverse right


function displayPreorder(root) {
    if (root === null) {
        return;
    }
    console.log(root.key);
    displayInorder(root.left);
    displayInorder(root.right);
}



function displayPostorder(root) {
    if (root === null) {
        return;
    }
    displayPostorder(root.left);
    displayPostorder(root.right);
    console.log(root.key);
}



function displayDepth(root, key) {  
    
}