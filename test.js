// // Javascript program to implement optimized delete in BST.

// class Node {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
//     }
    
//     // A utility function to do inorder traversal of BST
//     function inorder(root) {
//     if (root !== null) {
//         inorder(root.left);
//         console.log(root.key);
//         inorder(root.right);
//     }
//     }
    
//     /* A utility function to insert a new node with given key in
//     * BST */
//     function insert(node, key) {
//     /* If the tree is empty, return a new node */
//     if (node === null) {
//         return new Node(key);
//     }
    
//     /* Otherwise, recur down the tree */
//     if (key < node.key) {
//         node.left = insert(node.left, key);
//     } else {
//         node.right = insert(node.right, key);
//     }
    
//     /* return the (unchanged) node pointer */
//     return node;
//     }
    
//     /* Given a binary search tree and a key, this function
//     deletes the key and returns the new root */
//     function deleteNode(root, k) {
//     // Base case
//     if (root === null) {
//         return root;
//     }
    
//     // Recursive calls for ancestors of
//     // node to be deleted
//     if (root.key > k) {
//         root.left = deleteNode(root.left, k);
//         return root;
//     } else if (root.key < k) {
//         root.right = deleteNode(root.right, k);
//         return root;
//     }
    
//     // We reach here when root is the node
//     // to be deleted.
    
//     // If one of the children is empty
//     if (root.left === null) {
//         let temp = root.right;
//         delete root;
//         return temp;
//     } else if (root.right === null) {
//         let temp = root.left;
//         delete root;
//         return temp;
//     }
    
//     // If both children exist
//     else {
//         let succParent = root;
    
//         // Find successor
//         let succ = root.right;
//         while (succ.left !== null) {
//         succParent = succ;
//         succ = succ.left;
//         }
    
//         // Delete successor. Since successor
//         // is always left child of its parent
//         // we can safely make successor's right
//         // right child as left of its parent.
//         // If there is no succ, then assign
//         // succ.right to succParent.right
//         if (succParent !== root) {
//         succParent.left = succ.right;
//         } else {
//         succParent.right = succ.right;
//         }
    
//         // Copy Successor Data to root
//         root.key = succ.key;
    
//         // Delete Successor and return root
//         delete succ;
//         return root;
//     }
//     }
    
    




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




//Write a fucking method of displaying all the element of a binary search tree in breath first searching


//calculate the height of the root

function calculateHeight(root) {
    if (root === null) {
        return 0;
    }

    let leftSub = calculateHeight(root.left);
    let rightSub = calculateHeight(root.right);

    if(leftSub > rightSub) {
        return leftSub + 1;
    }
    else {
        return rightSub + 1;
    }
    
}

function displayLvlOrder(root, i) {
    if (root === null) {
        return;
    }
    else if (i === 0) {
        console.log(root.key);
    }
    else {
        displayLvlOrder(root.left, i - 1);
        displayLvlOrder(root.right, i - 1);
    }
}

function StartLvlOrder(root) {
    let height = calculateHeight(root);

    for (let i = 0; i < height; i++) {
        displayLvlOrder(root, i);
    }
}
console.log(root);
StartLvlOrder(root);