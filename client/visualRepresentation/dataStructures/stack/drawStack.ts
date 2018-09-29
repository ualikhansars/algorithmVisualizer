import {ctx} from './canvas';
import {stackLayer} from './stackSettings';
import {drawLine} from '../../utils/draw/drawLine';

export const drawStack = (size: number = 10) => {
    const stackHeight = stackLayer.gridHeight * size;
    const stackWidth = stackLayer.gridWidth;

    ctx.fillStyle = '#3b2b7f';
    ctx.rect(stackLayer.startX, stackLayer.startY, stackWidth, stackHeight);
    ctx.stroke();

    let startLineX = stackLayer.startX;
    let startLineY = stackLayer.startY + stackLayer.gridHeight;
    let finishLineX = startLineX + stackLayer.gridWidth;
    let finishLineY = startLineY;

    for(let i = 0; i < size; ++i) {
        drawLine(ctx, startLineX, startLineY, finishLineX, finishLineY);
        startLineY += stackLayer.gridHeight;
        finishLineY = startLineY;
    }
}