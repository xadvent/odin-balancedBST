import TreeNode from "./treeNode.js";

export default function buildTree(arr, start = 0, end = arr.length - 1) {
  // Get rid of duplicates in the array
  if (Array.isArray(arr)) arr = [...new Set(arr)];

  // If start is greater than end, return null
  if (start > end) return null;

  // Create a new node with the value of the middle element
  let mid = Math.floor((start + end) / 2);

  // Set the left and right properties to the result of calling the function again
  let left = buildTree(arr, start, mid - 1);
  let right = buildTree(arr, mid + 1, end);

  // Return the node
  let root = new TreeNode(arr[mid], left, right);
  return root;
}

