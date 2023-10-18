import buildTree from "./src/buildTree.js"
import isBalanced from "./src/isBalanced.js"
import rebalance from "./src/rebalance.js"
import { printTreeInOrder, printTreePreOrder, printTreePostOrder } from "./src/traversals.js"
import levelOrder from "./src/levelOrder.js"
import prettyPrint from "./src/prettyPrint.js"

function getRandomArray() {
    let arr = []
    for (let x = 0; x < Math.floor(Math.random() * 99); x++) {
        arr.push(Math.floor((Math.random()) * 99))
    }

    return [...new Set(arr)]

}

function getRandomTree() {
    let arr = getRandomArray()
    let root = buildTree(arr)
    return root
}

export default function () {
    console.log('------------------\nRandom Tree\n------------------')
    let tree = getRandomTree()
    console.log('Should be true: ' + isBalanced(tree))
    prettyPrint(tree)

    console.log('------------------\nUnbalanced Tree\n------------------')
    for (let i = 0; i < 10; i++) {
        tree.insert(Math.floor(Math.random() * 50))
    }
    console.log('Should be false: ' + isBalanced(tree))
    prettyPrint(tree)

    console.log('------------------\nRebalanced Tree\n------------------')
    tree = rebalance(tree)
    console.log('Should be true: ' + isBalanced(tree))
    prettyPrint(tree)

}

/*
1. Create BST from random array.
2. Confirm that it is balanced. isBalanced()
3. Print Tree
    - Level Order
    - Pre Order
    - Post Order
    - In Order
4. Unbalance by adding several values to the left side of the tree.
    insert()
5. Confirm that it is unbalanced. isBalanced()
6. Balance the Tree. rebalance()
7. Confirm that it is balanced. isBalanced()
8. Print Tree
*/