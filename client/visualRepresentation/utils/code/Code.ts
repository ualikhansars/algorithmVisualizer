class Code {
    private fontSize: number = 22;
    private x: number = 20; 
    private y: number = 40;
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
}

export default Code;