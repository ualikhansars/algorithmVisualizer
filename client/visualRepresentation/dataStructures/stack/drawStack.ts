import {ctx} from './canvas';
import {stackSettings} from './stackSettings';
import {drawLine} from '../../utils/draw/drawLine';

export const drawStack = (size: number = 10) => {
    let {startX, startY, gridWidth, gridHeight} = stackSettings;
    const stackWidth = gridWidth * size;
    const stackHeight = gridHeight;
    let startXLine = startX;
    let startYLine = startY;
    const finishYLine = startY + gridHeight;
    ctx.fillStyle = '#3b2b7f';
    ctx.rect(startX, startY, stackWidth, stackHeight);
    ctx.stroke();
    startXLine += gridWidth; 
    for(let i = 0; i < size - 1; i++) {
        drawLine(ctx, startXLine, startYLine, startXLine, finishYLine);
        startXLine += gridWidth; 
    }
};