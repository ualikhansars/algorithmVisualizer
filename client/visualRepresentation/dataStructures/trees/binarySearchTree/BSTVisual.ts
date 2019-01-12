import BSTSettings from "./BSTSettings";
import BSTDraw from "./draw/drawNode";

class BSTVisual {
    private branchWidth: number = 60;
    private branchHeight: number = 40;
    private rootX: number = BSTSettings.canvasArea.width / 2;
    private rootY: number = 30;

    private rightHeavyNodes: number = 0;
    private leftHeavyNodes: number = 0;

    public root: any;

    constructor() {
        this.root = null;
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
        node.parent = insertedNodeParent;
        if (insertedNodeParent == null) { // node is a root
            let positions = new Positions(this.rootX, this.rootY);
            node.position = positions;
            this.root = node;
        } 
        else if(node.key < insertedNodeParent.key) {
            let x = insertedNodeParent.position.x - this.branchWidth;
            let y = insertedNodeParent.position.y + this.branchHeight;
            let position = new Positions(x, y);
            node.position = position;
            node.setSubtree();
            insertedNodeParent.left = node;
        }
        else {
            let x = insertedNodeParent.position.x + this.branchWidth;
            let y = insertedNodeParent.position.y + this.branchHeight;
            let position = new Positions(x, y);
            node.position = position;
            insertedNodeParent.right = node;
        }
        this.leftHeavyNodes = this.countLeftHeavyNodes();
        this.rightHeavyNodes = this.countRightHeavyNodes();
        BSTDraw.drawNode(node.position.x, node.position.y, key);
    }

    countLeftHeavyNodes(): number {
        let node: TreeNode;
        let count: number = 0;
        if(this.root && this.root.left) {
            node = this.root.left;
            while(node.right != null) {
                count += 1;
                node = node.right;
            }
        } 
        return count;
    }

    countRightHeavyNodes(): number {
        let node: TreeNode;
        let count: number = 0;
        if(this.root && this.root.right) {
            node = this.root.right;
            while(node.left != null) {
                count += 1;
                node = node.left;
            }
        } 
        return count;
    }
}

class TreeNode {
    public key: any;
    public left: TreeNode;
    public right: TreeNode;
    public parent: TreeNode | null = null;
    public position: Positions | null = null;
    public subtree: Subtree | null = null;

    constructor(key: any, left:any = null, right:any = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }

    setSubtree(): Subtree | null {
        if(this.parent === null) {
            this.subtree = Subtree.Root;
        }
        else if(this.parent.subtree === Subtree.Root) {
            if(this.parent.key < this.key) {
                this.subtree = Subtree.Left;
            }
            else if(this.parent.key > this.key) {
                this.subtree = Subtree.Right;
            }
        }
        else if(this.parent.subtree === Subtree.Left) {
            this.subtree = Subtree.Left;
        }
        else if(this.parent.subtree === Subtree.Right) {
            this.subtree = Subtree.Right;
        }
        return this.subtree;
    }
}

class Positions {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

enum Subtree {
    Root,
    Left,
    Right
}

export default BSTVisual;