class Code {
    private fontSize: number = 18;
    private x: number = 80;
    private y: number = 80;
    private lineHeight: number = 30;
    private indentSize: number = 20;

    private line: number = 0;
    private ctx: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.ctx = context;
    }

    codeLine(indent: number, code: string) {
        let x = this.x + indent * this.indentSize;
        let y = this.y + this.line * this.lineHeight;
        this.ctx.font = `${this.fontSize}px serif`;
        this.ctx.fillText(code, x, y);
        this.line += 1;
    }
}

export default Code;