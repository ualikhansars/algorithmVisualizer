export const drawLine = (ctx: any, startX: Number, startY: Number, finishX: Number, finishY: Number) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(finishX, finishY);
    ctx.stroke();
}