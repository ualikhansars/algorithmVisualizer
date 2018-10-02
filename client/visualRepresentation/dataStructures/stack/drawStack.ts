import {ctx} from './canvas';
import {
    indexLayer,
    stackLayer,
    pointerLayer
} from './stackSettings';
import {drawLine} from '../../utils/draw/drawLine';
import { drawImage } from '../../utils/draw/drawImage';

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

export const drawIndexLayer = (size: number = 10) => {
    let x = indexLayer.startX;
    let y = indexLayer.startY;
    ctx.font = "18px serif";
    for(let i = -1; i < size; ++i) {
        let textX = x + (indexLayer.gridWidth / 2);
        let textY = y + (indexLayer.gridHeight / 2);
        ctx.fillText(i, textX, textY);
        y += indexLayer.gridHeight;
    }
}

export const drawPointerLayer = () => {
    const {startX, startY, imageWidth, imageHeight, offset, fontSize} = pointerLayer;
    drawImage(ctx, '/images/left-arrow24.png', startX, startY, imageWidth, imageHeight);
    const textX = startX + imageWidth + offset;
    const textY = startY + (imageHeight / 2) + offset;  
    ctx.font =  `${fontSize}px serif`;
    ctx.fillText('top', textX, textY);
}

export const drawElementInStack = (element: string, index: number = 0) => {
    let {startX, startY, gridWidth, gridHeight, fontSize} = stackLayer;
    startY += index * gridHeight;
    let offsetX = Math.round(gridWidth * 0.2);
    let offsetY = Math.round(gridHeight * 0.2);
    let elementX = startX + offsetX;
    let elementY = startY + (gridHeight / 2) + offsetY;
    ctx.font =  `${fontSize}px serif`;
    ctx.fillText(element, elementX, elementY);
}

export const drawVisualRepresentation = () => {
    drawStack();
    drawIndexLayer();
    drawPointerLayer();
} 