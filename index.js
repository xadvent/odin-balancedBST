#!/usr/bin/env node
import { createTree } from "./createBST.js";

const arr = [1,2,3,4,5,6,7,8,9,10]
let root = createTree(arr);

// Depth-first traversal
function printTreeInOrder(tree){
    // In-order traversal (left, root, right)
    // left
    if(tree.left) printTreeInOrder(tree.left);
    
    // root
    console.log(tree.value);

    // right
    if(tree.right) printTreeInOrder(tree.right);

    return 'done'
}


// Depth-first traversal
function printTreePreOrder(tree){
    // Pre-order traversal (root, left, right)
    // root
    console.log(tree.value);

    // left
    if(tree.left) printTreePreOrder(tree.left);
    
    // right
    if(tree.right) printTreePreOrder(tree.right);

    return 'done'
}

// Depth-first traversal
function printTreePostOrder(tree){
    // Post-order traversal (left, right, root)
    // left
    if(tree.left) printTreePostOrder(tree.left);
    
    // right
    if(tree.right) printTreePostOrder(tree.right);

    // root
    console.log(tree.value);

    return 'done'
}

// Breadth-first traversal
function printTreeBreadthFirst(tree){
    // Breadth-first traversal
    // AKA Level-order traversal
    let queue = [tree];
    while(queue.length){
        let node = queue.shift();
        console.log(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return 'done'
}


// Below is testing code

// console.log(printTreeInOrder(root))
// console.log(printTreePreOrder(root))
// console.log(printTreePostOrder(root))
// console.log(printTreeBreadthFirst(root))

// For Comparison
console.log(root)