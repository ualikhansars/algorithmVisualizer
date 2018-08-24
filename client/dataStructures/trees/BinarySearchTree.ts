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

    search(node: TreeNode, key: any): any {
        if(node == null || key == this.root.key) {
            return this.root;   
        }
        if(key < this.root.key) {
            return this.search(node.left, key);
        } else {
            return this.search(node.right, key);
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
        let y = null;
        let x = this.root;
        while(x != null) {
            y = x;
            if(node.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        node.p = y;
        if(y == null) {
            this.root = node; // tree was empty
        } 
        else if(node.key < y.key) {
            y.left = node;
        }
        else {
            y.right = node;
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