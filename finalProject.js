// Write a driver script that does the following:

// xxx Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
// xxx Confirm that the tree is balanced by calling isBalanced.
// xxx Print out all elements in level, pre, post, and in order.
// xxx Confirm that the tree is unbalanced by calling isBalanced.
// xxx Balance the tree by calling rebalance.
// xxx Confirm that the tree is balanced by calling isBalanced.
// xxx Print out all elements in level, pre, post, and in order.




class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
      
    }
}

//Get a random arr from 0 to 100;
function getRandomArr() {
    const arrSize = Math.floor(Math.random() * 100);
    let arr = [];
    for(let i = 0; i < arrSize; i++) {
        let element = Math.floor(Math.random() * arrSize);
        arr.push(element);
    }
    return arr;
}


//Sort that array

function sortArr(arr1, arr2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    let k = 0;
    const m = arr1.length;
    const n = arr2.length;

    while(i < m && j < n) {
        if(arr1[i] < arr2[j]) {
            sortedArr[k] = arr1[i];
            i++;
        }
        else {
            sortedArr[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < m) {
        sortedArr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < n) {
        sortedArr[k] = arr2[j];
        j++;
        k++;
    }
    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return sortArr(mergeSort(leftArr), mergeSort(rightArr));
}


//Remove dupplicate of that sorted arr

function removeDup(arr) {
    let sortedArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i-1]) {
            sortedArr.push(arr[i]);
        }
    }
    return sortedArr;
}


//Function that do it all

function getNewArr() {
    const arr = removeDup(mergeSort(getRandomArr()))
    return arr;
}




//Creating the tree with the data

class Tree {
    binarySearchTree = function(arr, start, end) {
        if (start >= end) {
            return null;
        }
        const mid = Math.floor((start+end)/2);
        const node = new Node(arr[mid]);

        node.left = this.binarySearchTree(arr, start, mid);
        node.right = this.binarySearchTree(arr, mid + 1, end);

        return node;
    }

    height = function(root) {
        if(root == null){
            return 0;
        }
        return Math.max(this.height(root.left), this.height(root.right)) + 1
    }

    isBalanced = function(root) {
        if(root == null) {
            return true
        }
 
        let lh = this.height(root.left)
        let rh = this.height(root.right)
    
        if (Math.abs(lh - rh) <= 1 && this.isBalanced(
        root.left)== true && this.isBalanced( root.right) == true){
            return true;
        }
    

        return false
        }
    
    inOrderPrint = function(root, arr = []) {
        if(root === null) {
            return;
        }
        this.inOrderPrint(root.left, arr);
        arr.push(root.key);
        this.inOrderPrint(root.right, arr);

        return arr;
    }

    preOrderPrint = function(root) {
        if(root === null) {
            return;
        }
        console.log(root.key);
        this.preOrderPrint(root.left);
        this.preOrderPrint(root.right);
    }

    postOrder = function(root) {
        if(root === null) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.key);
        }
    }

    //insert elements
    insertNode = function(root, key) {

        if (root == null) {
            root = new Node(key);
            return root;
        }
        if (key < root.key) {
            root.left = this.insertNode(root.left, key);
        }

        else if (key > root.key) {
            root.right = this.insertNode(root.right, key);
        }
        return root;
    }

    addNodeRandom = function(root) {
        let num = Math.floor(Math.random() * 100);
        for(let i = 0; i < num; i++) {
            let key = Math.floor(Math.random() * num);
            this.insertNode(root, key);
        }

    }
    reBalance = function(root) {
        if(this.isBalanced(root)) {
            console.log('Still good.')
            return root;
        }
        const newArr = this.inOrderPrint(root);
        const newRoot = this.binarySearchTree(newArr, 0, newArr.length);
        console.log('Rebalanced.')
        return newRoot;
    }

}

const newArr = getNewArr();
const testTree = new Tree;
let bst = testTree.binarySearchTree(newArr, 0, newArr.length);


testTree.addNodeRandom(bst);
console.log(bst);
bst = testTree.reBalance(bst);
console.log(bst);

































