class BSTVisual {

    private branchWidth: number = 60;
    private branchHeight: number = 60;

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
            this.root = node;
        } 
        else if(node.key < insertedNodeParent.key) {
         insertedNodeParent.left = node;
        }
        else {
         insertedNodeParent.right = node;
        }
    }
}

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