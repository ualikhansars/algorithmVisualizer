import BSTSettings from "./BSTSettings";
import BSTDraw from "./draw/drawNode";

class BSTVisual {

    private branchWidth: number = 100;
    private branchHeight: number = 60;
    private rootX: number = BSTSettings.canvasArea.width / 2;
    private rootY: number = 30;

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
        node.p = insertedNodeParent;
        if (insertedNodeParent == null) {
            let positions = new Positions(this.rootX, this.rootY);
            node.position = positions;
            this.root = node;
        } 
        else if(node.key < insertedNodeParent.key) {
            let x = insertedNodeParent.position.x - this.branchWidth;
            let y = insertedNodeParent.position.y + this.branchHeight;
            let position = new Positions(x, y);
            node.position = position; 
            insertedNodeParent.left = node;
        }
        else {
            let x = insertedNodeParent.position.x + this.branchWidth;
            let y = insertedNodeParent.position.y + this.branchHeight;
            let position = new Positions(x, y);
            node.position = position;
            insertedNodeParent.right = node;
        }
        BSTDraw.drawNode(node.position.x, node.position.y, key);
    }
}

class TreeNode {
    public key: any;
    public left: any;
    public right: any;
    public p: any;
    public position: Positions | null = null;

    constructor(key: any, left:any = null, right:any = null) {
        this.key = key;
        this.left = left;
        this.right = right;
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

export default BSTVisual;