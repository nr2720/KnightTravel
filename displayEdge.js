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


//Display Depth 


function displayDepth(root, key, counter) {
    if (root === null) {
        console.log('Not found');
        return
    }
    counter = counter + 1;
    
    if (root.key > key) {
       return displayDepth(root.left, key, counter);
    }

    if (root.key < key) {
       return displayDepth(root.right, key, counter);
    }

    return counter;
}











let jesse = displayDepth(root, 5, 0);

console.log(jesse);
