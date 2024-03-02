//Given a binary search tree
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


function insertRec(root, key) {
    //if tree is empty, return a node (leaf)
    if (root == null) {
        root = new Node(key);
        return root;
    }

    //Otherwise, recur down the tree
    if (key < root.key) {
        root.left = insertRec(root.left, key);
    }

    else if (key > root.key) {
        root.right = insertRec(root.right, key);
    }
    return root;
}

insertRec(root, 111);
insertRec(root, 123);
insertRec(root, 146);
insertRec(root, 190);
insertRec(root, 200);
insertRec(root, 254);



console.log(root);


//is Balance
//if right has more than 1 edge than left


function isBalanced(root) {
    if (root === null) {
        return;
    }

}

function displayInorder(root, arr = []) {
    if (root === null) {
        return;
    }
    displayInorder(root.left, arr);
    arr.push(root.key);
    displayInorder(root.right, arr);

    return arr;
}
//balance tree

function balanceTree(root) {
    sortedList = displayInorder(root);
    return bST(sortedList, 0, sortedList.length);
}

const balancedRoot = balanceTree(root);

console.log(balancedRoot);



//detect if is balanced

function height(root){
     
    // base condition when binary tree is empty
    if(root == null)
        return 0
    return Math.max(height(root.left), height(root.right)) + 1
}
 
// function to check if tree is height-balanced or not
function isBalanced(root){
     
    // Base condition
    if(root == null)
        return true
 
    // for left and right subtree height
    let lh = height(root.left)
    let rh = height(root.right)
 
    // allowed values for (lh - rh) are 1, -1, 0
    if (Math.abs(lh - rh) <= 1 && isBalanced(
    root.left)== true && isBalanced( root.right) == true)
        return true
 
    // if we reach here means tree is not 
    // height-balanced tree
    return false
}
