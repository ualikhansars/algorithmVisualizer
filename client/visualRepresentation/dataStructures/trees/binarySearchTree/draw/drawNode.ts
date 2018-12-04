import { ctx } from "../../../../common/canvas";

class BSTDraw {
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
}

export default BSTDraw;