#!/usr/bin/env node
import buildTree from "./src/buildTree.js";
import getDepth from "./src/getDepth.js";
import getHeight from "./src/getHeight.js";
import levelOrder from "./src/levelOrder.js";
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


// TESTING LEVEL ORDER
// prettyPrint(root)
// console.log('------------------')   
// console.log(levelOrder(root))


// TESTING SEARCH
// console.log(root.search(1))
// console.log(root.search(5))
// console.log(root.search(10))
// console.log(root.search(110)) // null


// TESTING TRAVERSALS
// console.log(root)
// console.log('------------------')
// console.log(printTreeInOrder(root))
// console.log(printTreePreOrder(root))
// console.log(printTreePostOrder(root))
// console.log(printTreeBreadthFirst(root))


// TESTING GET DEPTH
// prettyPrint(root)
// console.log(getDepth(root))
// console.log(getDepth(root.left))
// console.log(getDepth(root.right))
// console.log(getDepth(root.left.left))


// TESTING GET HEIGHT
// prettyPrint(root)
// console.log(getHeight(root))
// console.log(getHeight(root.left))
// console.log(getHeight(root.right))
// console.log(getHeight(root.left.left))