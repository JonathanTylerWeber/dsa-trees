/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    const toVisitQueue = [this.root];
    let total = 0;

    while (toVisitQueue.length) {
      const current = toVisitQueue.pop();
      total = total += current.val;

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    const toVisitQueue = [this.root];
    let total = 0;

    while (toVisitQueue.length) {
      const current = toVisitQueue.pop();
      if (current.val % 2 === 1) {
        total++;
      }


      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    const toVisitQueue = [this.root];
    let total = 0;

    while (toVisitQueue.length) {
      const current = toVisitQueue.pop();
      if (current.val > lowerBound) {
        total++;
      }


      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return total;
  }
}

module.exports = { Tree, TreeNode };
