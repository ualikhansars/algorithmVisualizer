import Positions from './Positions';
import Subtree from './Subtree';

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

export default TreeNode;