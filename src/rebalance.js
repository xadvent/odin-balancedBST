import { inOrderTraversal } from "./traversals.js";
import buildTree from "./buildTree.js";
import isBalanced from "./isBalanced.js";

export default function rebalance(nodeList){
    let sorted = mergeSort(inOrderTraversal(nodeList));
    sorted = [...new Set(sorted)]

    if(!isBalanced(sorted)) return rebalance(buildTree(sorted));

    return buildTree(sorted);
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

function merge(left, right){
    let sorted = [];
    while(left.length && right.length){
        if(left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }
    return sorted.concat(left, right);
}