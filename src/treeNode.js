export default class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value, left, right) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new TreeNode(value, left, right);
            } else {
                this.left.insert(value, left, right);
            }
        } else {
            if (this.right === null) {
                this.right = new TreeNode(value, left, right);
            } else {
                this.right.insert(value, left, right);
            }
        }
    }

    delete(value){
        const leftNull = this.left === null;
        const rightNull = this.right === null;

        if(this.value === value){                               // Case 1
            if(leftNull) {                                          // Case 1a
                let tempNode = this.right;
                this.value = null;

                return tempNode

            } else if (rightNull) {                                 // Case 1b
                let tempNode = this.left;
                this.value = null;

                return tempNode
            }

        // Case 1c
        let tempNode = this.right;
        while(tempNode.left !== null){
            tempNode = tempNode.left;
        }

        this.value = tempNode.value;

        this.right = this.right.delete(tempNode.value);

        } else if (value < this.value && !leftNull){            // Case 2
            this.left = this.left.delete(value);                    // Case 2a
        } else if (this.right != null){                         // Case 3
            this.right = this.right.delete(value);                  // Case 3a
        }

        return this                                         // Return the updated node
    } 

    search(value) {
        return this.value == value ? this 
        : value < this.value && this.left !== null ? this.left.search(value) 
        : value > this.value && this.right !== null ? this.right.search(value) 
        : null
        
    }
        // if (this.value === value) {
        //     return this;
        // } else if (value < this.value && this.left !== null) {
        //     return this.left.search(value);
        // } else if (value > this.value && this.right !== null) {
        //     return this.right.search(value);
        // } else {
        //     return null;
        // }


}





















/* 
Breakdown for the delete method:
    1. Case: The current node's value is the one to be deleted (this.value === value):
        a. Sub-case: The current node has no left child (this.left === null):
            - The function returns the right child.

        b. Sub-case: The current node has no right child (this.right === null):
            - The function returns the left child.

        c. Sub-case: The current node has both left and right children:
            - It searches for the inorder successor (smallest node in the right subtree).
            - Assigns the value of the inorder successor to the current node.
            - Deletes the inorder successor.

    2. Case: The value to be deleted is smaller than the current node's value and the left child is not null (value < this.value && this.left !== null):
        a. The function tries to delete the value from the left subtree and updates the left child accordingly.

    3. Case: The value to be deleted is greater than the current node's value and the right child is not null:
        a. The function tries to delete the value from the right subtree and updates the right child accordingly.

End of Function:
    Returns the updated node.
*/