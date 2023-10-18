export default function levelOrder(tree){
    let queue = [tree];
    let result = [];
    result.push(queue[0].value)

    while(queue.length){
        let node = queue.shift();

        if(node.left){
            queue.push(node.left);
            result.push(node.left.value)

        } 
        if(node.right) {
            queue.push(node.right);
            result.push(node.right.value)  
        }
    }
    return result
}
