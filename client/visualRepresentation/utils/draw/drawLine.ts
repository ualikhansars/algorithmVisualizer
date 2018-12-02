export const drawLine = (ctx: CanvasRenderingContext2D, startX: number, startY: number, finishX: number, finishY: number) => {
    if(ctx) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(finishX, finishY);
        ctx.stroke();
    } 
    else {
        throw new Error("context is undefined");
    }
}