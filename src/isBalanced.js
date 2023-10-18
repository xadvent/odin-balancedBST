import getHeight from "./getHeight.js";

export default function isBalanced(tree){
    if(!tree) return true;

    let left = getHeight(tree.left);
    let right = getHeight(tree.right);

    if(Math.abs(left - right) > 1) return false;

    return isBalanced(tree.left) && isBalanced(tree.right);
}