// Depth-first traversal
export function printTreeInOrder(tree, values = []){
    // In-order traversal (left, root, right)
    // left
    if(tree.left) printTreeInOrder(tree.left, values);
    
    // root
    console.log(tree.value);

    // right
    if(tree.right) printTreeInOrder(tree.right, values);

    return values
}

export function inOrderTraversal(tree, values = []){
    if(tree.left) inOrderTraversal(tree.left, values);
    
    values.push(tree.value);

    if(tree.right) inOrderTraversal(tree.right, values);

    return values
}


// Depth-first traversal
export function printTreePreOrder(tree){
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
export function printTreePostOrder(tree){
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
export function printTreeBreadthFirst(tree){
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

