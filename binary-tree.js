/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    }

    let depth = 1;
    const queue = [{ node: this.root, depth: 1 }];

    while (queue.length > 0) {
      const { node, depth } = queue.shift();

      // If the node is a leaf node (both left and right children are null), return the depth
      if (!node.left && !node.right) {
        return depth;
      }

      // Add left child to the queue if it exists
      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
      }

      // Add right child to the queue if it exists
      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }

    function dfs(node, currentDepth) {
      if (!node) {
        return currentDepth;
      }

      // Recursively traverse left and right subtrees
      const leftDepth = dfs(node.left, currentDepth + 1);
      const rightDepth = dfs(node.right, currentDepth + 1);

      // Return the maximum depth between left and right subtrees
      return Math.max(leftDepth, rightDepth);
    }

    return dfs(this.root, 0);
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    // Initialize a variable to keep track of the maximum sum
    let maxSum = 0;

    // Define a helper function for DFS traversal
    function dfs(node) {
      // If the current node is null, return 0
      if (!node) {
        return 0;
      }

      // Recursively find the maximum sum in the left and right subtrees
      const leftSum = Math.max(0, dfs(node.left)); // Exclude negative sums
      const rightSum = Math.max(0, dfs(node.right)); // Exclude negative sums

      // Update the maximum sum encountered so far
      maxSum = Math.max(maxSum, leftSum + rightSum + node.val);

      // Return the maximum sum of the current subtree rooted at this node
      return Math.max(leftSum, rightSum) + node.val;
    }

    // Start DFS traversal from the root node
    dfs(this.root);

    // Return the maximum sum encountered during traversal
    return maxSum;


  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // Initialize a variable to keep track of the next larger value
    let nextLargerValue = null;

    // Define a helper function for in-order traversal
    function inorder(node) {
      // If the node is null, return
      if (!node) {
        return;
      }

      // Recursively traverse the left subtree
      inorder(node.left);

      // If the current node's value is larger than the lower bound
      if (node.val > lowerBound) {
        // If nextLargerValue is not set or the current node's value is smaller than nextLargerValue, update nextLargerValue
        if (nextLargerValue === null || node.val < nextLargerValue) {
          nextLargerValue = node.val;
        }
      }

      // Recursively traverse the right subtree
      inorder(node.right);
    }

    // Start in-order traversal from the root node
    inorder(this.root);

    // Return the next larger value found, or null if no such value exists
    return nextLargerValue;
  }


  // /** Further study!
  //  * areCousins(node1, node2): determine whether two nodes are cousins
  //  * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {

  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
