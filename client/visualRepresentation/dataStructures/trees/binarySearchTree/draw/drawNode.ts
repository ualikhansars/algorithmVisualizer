import { ctx } from "../../../../common/canvas";
import TreeNode from '../utils/TreeNode';
import Positions from '../utils/Positions';
import Subtree from "../utils/Subtree";
import BSTSettings from "../BSTSettings";

class BSTDraw {
    private static branchWidth: number = 60;
    private static branchHeight: number = 40;

    static drawNode(x: number, y: number, value: string) {
        let radius: number = 20;
        let offset = 7;
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.font = '18px serif';
        ctx.fillText(value, x - offset, y + offset);
    }

    static drawTree(node: TreeNode, x: number, y: number, leftHeavyNodes: number, rightHeavyNodes: number) {
        ctx.clearRect(0, 0, BSTSettings.canvasArea.width, BSTSettings.canvasArea.height);
        this.iterateTree(node, x, y, leftHeavyNodes, rightHeavyNodes);
    }

    static iterateTree(node: TreeNode, x: number, y: number, leftHeavyNodes: number, rightHeavyNodes: number) {
        if(node == null) {
            return;
        }
        this.drawNode(x, y, node.key);
        let position = new Positions(x, y);
        node.position = position;
        let leftX: number, leftY: number;
        let rightX: number, rightY: number;
        if(node.subtree === Subtree.Root) {
            leftX = node.position.x - (this.branchWidth * (leftHeavyNodes + 1));
            rightX = node.position.x + (this.branchWidth * (rightHeavyNodes + 1));
        } else {
            leftX = node.position.x - this.branchWidth;
            rightX = node.position.x + this.branchWidth;
        }
        leftY = node.position.y + this.branchHeight;
        rightY = node.position.y + this.branchHeight;
        this.iterateTree(node.left, leftX, leftY, leftHeavyNodes, rightHeavyNodes);
        this.iterateTree(node.right, rightX, rightY, leftHeavyNodes, rightHeavyNodes);
    }
}

export default BSTDraw;