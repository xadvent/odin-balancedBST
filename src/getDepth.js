export default function getDepth(tree, count = 0){
    if(!tree) return count;
    count++;
    let left = getDepth(tree.left, count);
    let right = getDepth(tree.right, count);
    return Math.min(left, right);
}