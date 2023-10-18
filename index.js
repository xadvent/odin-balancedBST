#!/usr/bin/env node
import buildTree from "./src/buildTree.js";
import prettyPrint from "./src/prettyPrint.js";
import { printTreeInOrder, printTreePreOrder, printTreePostOrder, printTreeBreadthFirst } from "./src/traversals.js";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let root = buildTree(arr);


// TESTING INSERT METHOD

// root.insert(11);
// prettyPrint(root)
// console.log('------------------')
// root.insert(50);
// root.insert(-20);
// prettyPrint(root)



// TESTING DELETE METHOD

// prettyPrint(root)
// console.log('------------------')
// for(let i = 1; i < root.value; i++){
//     root.delete(i);
// }
// root.delete(9)
// prettyPrint(root)



// TESTING TRAVERSALS

// console.log(root)
// console.log(printTreeInOrder(root))
// console.log(printTreePreOrder(root))
// console.log(printTreePostOrder(root))
// console.log(printTreeBreadthFirst(root))
