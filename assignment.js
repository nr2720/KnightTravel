

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.arr = arr;
        this.root = this.buildTree(arr, 0, arr.length)
    }
    buildTree = function(arr, start, end) {
        if(start >= end) {
            return null;
        }
        const mid = Math.floor((start+end)/2);
        const node = new Node(arr[mid]);
    
        node.left = this.buildTree(arr, start, mid);
        node.right = this.buildTree(arr, mid + 1, end);
    
        return node;
    }

}










function removeDup(arr) {
    let result = arr;
    for(let i = 0; i < result.length; i++){
     if(result[i] == result[i-1]){
         result.splice(i, 1);
         i--;
     }
    }
    return result;
 }
 

function arrSort(arr1, arr2){
    let sortedArr = [];
    let i = 0;
    let j = 0;
    let k = 0;
    let m = arr1.length;
    let n = arr2.length;

    while(i < m && j < n) {
        if (arr1[i] < arr2[j]){
            sortedArr[k] = arr1[i];
            i++;
            k++;
        }
        else {
            sortedArr[k] = arr2[j];
            j++;
            k++
        }
    }
    for(; i<m; i++) {
        sortedArr[k] = arr1[i];
        k++;
    }
    for(; j<n; j++) {
        sortedArr[k] = arr2[j];
        k++
    }
    return sortedArr;
}


function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

   return removeDup(arrSort(mergeSort(leftArr), mergeSort(rightArr)));
}




const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];


const firstTree = new Tree(mergeSort(arr));








































