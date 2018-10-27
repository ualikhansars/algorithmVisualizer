import {drawLine} from '../draw/drawLine';

class Code {
    private fontSize: number = 22;
    private animationLineIndent: number = 15;
    private x: number = 20; 
    private y: number = 40;
    private offsetY: number = 6;
    private lineHeight: number = 30;
    private indentSize: number = 20;

    private lineNumber: number = 0;
    private ctx: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.ctx = context;
    }

    private drawLineNumber() {
        const x = this.x;
        const y = this.y + this.lineNumber * this.lineHeight;
        const line = (this.lineNumber + 1).toString();
        this.ctx.font = `${this.fontSize}px serif`;
        this.ctx.fillText(line, x, y);
    } 

    codeLine(indent: number, code: string) {
        this.drawLineNumber();
        let x = this.x + indent * this.indentSize;
        let y = this.y + this.lineNumber * this.lineHeight;
        this.ctx.font = `${this.fontSize}px serif`;
        this.ctx.fillText(code, x, y);
        this.lineNumber += 1;
    }

    newLine() {
        this.drawLineNumber();
        this.lineNumber++;
    }

    colorCodeLine(line: number) {
        let defaultY = this.y - this.lineHeight + this.offsetY;
        let startX = this.x + this.animationLineIndent;
        let finishX = startX;
        let startY = defaultY + this.lineHeight * (line - 1);
        let finishY = startY + this.lineHeight;
        drawLine(this.ctx, startX, startY, finishX, finishY);
    }

    removeCodeLine(line: number) {
        let defaultY = this.y - this.lineHeight + this.offsetY;
        let x = this.x + this.animationLineIndent - this.offsetY;
        let y = defaultY +  this.lineHeight * (line - 1);
        let width = 10;
        let height = this.lineHeight + this.offsetY;
        this.ctx.clearRect(x, y, width, height);
    }
}

export default Code;