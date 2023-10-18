export default function getHeight(tree, count = 0){
    if(!tree) return count;
    count++;
    let left = getHeight(tree.left, count);
    let right = getHeight(tree.right, count);
    return Math.max(left, right);
}