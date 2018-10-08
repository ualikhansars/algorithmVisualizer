import { drawLine } from "../draw/drawLine";

class Code {
    private fontSize: number = 18;
    private x: number = 20; 
    private y: number = 40;
    private lineHeight: number = 30;
    private indentSize: number = 20;

    private line: number = 0;
    private lineNumber: number = 1;
    private ctx: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.ctx = context;
    }

    private drawLineNumber() {
        let x = this.x;
        let y = this.y + this.line * this.lineHeight;
        this.ctx.font = `${this.fontSize}px serif`;
        this.ctx.fillText(this.lineNumber.toString(), x, y);
        this.lineNumber++;
    } 

    codeLine(indent: number, code: string) {
        this.drawLineNumber();
        let x = this.x + indent * this.indentSize;
        let y = this.y + this.line * this.lineHeight;
        this.ctx.font = `${this.fontSize}px serif`;
        this.ctx.fillText(code, x, y);
        this.line += 1;
    }
}

export default Code;