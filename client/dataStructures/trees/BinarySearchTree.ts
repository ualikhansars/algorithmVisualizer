class TreeNode {
    public key: any;
    public left: any;
    public right: any;
    public p: any;

    constructor(key: any, left:any = null, right:any = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    public root: any;

    constructor() {
        this.root = null;
    }

    search(key: any, node: any = this.root): any {
        if(node == null || key == node.key) {
            return node;   
        }
        if(key < this.root.key) {
            return this.search(key, node.left);
        } else {
            return this.search(key, node.right);
        }
    }

    minimum(node: TreeNode): TreeNode {
        while(node.left != null) {
            node = node.left;
        }
        return node;
    }

    maximum(node: TreeNode): TreeNode {
        while(node.right != null) {
            node = node.right;
        }
        return node;
    }

    successor(node: TreeNode): TreeNode {
        if(node.right != null) {
            return this.minimum(node.right);
        }
        let y = node.p;
        while(y != null && node == y.right) {
            node = y;
            y = y.p;
        }
        return y;
    }

    insert(key: any) {
        let node = new TreeNode(key);
        let insertedNodeParent = null;
        let leaf = this.root;
        while(leaf != null) {
         insertedNodeParent = leaf;
            if(node.key < leaf.key) {
                leaf = leaf.left;
            } else {
                leaf = leaf.right;
            }
        }
        node.p = insertedNodeParent;
        if (insertedNodeParent == null) {
            this.root = node; // tree was empty
        } 
        else if(node.key < insertedNodeParent.key) {
         insertedNodeParent.left = node;
        }
        else {
         insertedNodeParent.right = node;
        }
    }

    transplant(node1: any, node2: any) {
        if(node1.p == null) {
            this.root = node2;
        }
        else if(node1 === node1.p.left) {
            node1.p.left = node2;
        }
        else {
            node1.p.right = node2;
        }
        if(node2 == null) {
            node2.p = node1.p;
        }
    }

    delete(node: TreeNode) {
        if(node.left == null) {
            this.transplant(node, node.right);
        } 
        else if(node.right == null) {
            this.transplant(node, node.left);
        }
        else {
            let y = this.minimum(node.right);
            if(y.p != node) {
                this.transplant(y, y.right);
                y.right = node.right;
                y.right.p = y;
            }
            this.transplant(node, y);
            y.left = node.left;
            y.left.p = y;
        }
    }
}

export default BinarySearchTree;