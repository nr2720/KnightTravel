//Insertion in a Binary Search Tree

//1. Binary Search Tree normal function

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




// How to insert in this binary search three ?

//Search for a leaf; here are the steps
//Check the values to be inserted (say x) with the value of the current node we are in
//If x is lower that the node value, go left
//If x is higher, go right
//If node value = null, make it x   



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

insertRec(root, 56);

//3. Search from tree

//go to root.
//if value, return node.
//if lower, recurse with left.
//if greater, recurse with right

function searchTree(root, key) {
    if (root == null) {
        console.log('not found');
        return root;
    }

    if (root.key > key) {
       return searchTree(root.left, key);
    }

    if (root.key < key) {
        return searchTree(root.right, key);
    }
    console.log(root)
    return root;
}


//4. Remove from tree. Un peu plus compliqué pujisque si l'on enleve un root, on déséquilibre toute la structure.


function deleteNode(root, key) {
    //Base case
    if (root === null) {
        console.log('Element not found')
        return root;
    }
    //Recursive calls for ancestors of
    // node to be deleted
    //Fait le tri pour trouver la node a deleter

    if (root.key > key) {
       root.left = deleteNode(root.left, key);
       return root;
    }

    else if (root.key < key) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    //Root is the nod to be deleted!

    //If one if the children is empty

    if(root.left === null) {
        let temp = root.right;
        delete root;
        return temp;
    }

    else if(root.right === null) {
        let temp = root.left;
        delete root;
        return temp;
    }

    //If both children exist

    else {
        let succParent = root;
        let succ = root.right;

        //Cherche pour le minimum à droite
        while(succ.left != null) {
            succParent = succ;
            succ = succ.left;
        }   

        if (succParent !== root) {
            succParent.left = succ.right;
        }
        else {
            succParent.right = succ.right;
        }
        root.key = succ.key
        delete succ;
        return root;
    }
}





//Lvl order
//Should traverse the tree in breadth first level order
//Provide each node as an argument to the callback

//3 functions. rewrite.

function calculateHeightBfs(root) {
    //base case
    if (root == null) {
        return 0;
    }

    let leftHeight = calculateHeightBfs(root.left);
    let rightHeight = calculateHeightBfs(root.right);

    if (leftHeight > rightHeight) {
        return leftHeight + 1;
    }

    else {
        return rightHeight + 1;
    }
}

function lvlOrderDisplay(root, l) {
    if (root === null) {
        return;
    }

    else if (l === 0) {
        console.log(root.key);
    }

    else {
        lvlOrderDisplay(root.left, l - 1);
        lvlOrderDisplay(root.right, l - 1);
    }
}



function recursiveLvlOrder(root) {
    let h = calculateHeightBfs(root);
    for(let l = 0; l < h; l++) {
        lvlOrderDisplay(root, l)
    }
}























recursiveLvlOrder(root);
console.log(root);