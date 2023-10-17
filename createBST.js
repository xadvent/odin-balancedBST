class TreeNode{
  constructor(value, left, right) {
    this.value = value;
    this.left = left|| null;
    this.right = right || null;
  }
}

export function createTree(arr, start = 0, end = arr.length - 1){
  // If start is greater than end, return null
    if (start > end) return null;

  // Create a new node with the value of the middle element
    let mid = Math.floor((start + end) / 2);

  // Set the left and right properties to the result of calling the function again
    let left = createTree(arr, start, mid - 1);
    let right = createTree(arr, mid + 1, end);

  // Return the node
    let root = new TreeNode(arr[mid], left, right);
    return root;
}

