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

export const drawPointer = (index: number = 0) => {
    const {startX, startY, imageWidth, imageHeight, offset, fontSize, gridHeight} = pointerLayer;
    let x = startX + offset;
    let y = (startY + gridHeight) + (index * gridHeight);
    let centerY = y + (gridHeight / 2) - (imageHeight / 2);
    drawImage(ctx, '/images/left-arrow24.png', x, centerY, imageWidth, imageHeight);
    const textX = x + imageWidth + offset;
    const textY = centerY + fontSize - offset;  
    ctx.font = `${fontSize}px serif`;
    ctx.fillText('top', textX, textY);
}

export const movePointer = (prevIndex: number, nextIndex: number) => {
    const {startY, gridHeight} = pointerLayer;
    let currentY = (startY + gridHeight) + (prevIndex * gridHeight);
    let nextY = (startY + gridHeight) + (nextIndex * gridHeight);
    let directionY = nextIndex - prevIndex;
    animatePointer(currentY, nextY, directionY);
}

const animatePointer = (currentY: number, nextY: number, directionY: number) => {
    if(currentY === nextY) return;
    const {startX, imageWidth, imageHeight, offset, fontSize, gridHeight, gridWidth, animationSpeed} = pointerLayer;
    let x = startX + offset;
    ctx.clearRect(x, currentY, gridWidth, gridHeight);
    let centerY = currentY + (gridHeight / 2) - (imageHeight / 2);
    drawImage(ctx, '/images/left-arrow24.png', x, centerY, imageWidth, imageHeight);
    const textX = x + imageWidth + offset;
    const textY = centerY + fontSize - offset;  
    ctx.font = `${fontSize}px serif`;
    ctx.fillText('top', textX, textY);
    setTimeout(() => {
        currentY += directionY;
        animatePointer(currentY, nextY, directionY)
    }, animationSpeed);
}

export const drawElementInStack = (element: string, index: number = 0) => {
    let {startX, startY, gridWidth, gridHeight, fontSize} = stackLayer;
    startY += index * gridHeight;
    let offsetX = Math.round(gridWidth * 0.2);
    let offsetY = Math.round(gridHeight * 0.2);
    let elementX = startX + offsetX;
    let elementY = startY + (gridHeight / 2) + offsetY;
    ctx.font = `${fontSize}px serif`;
    ctx.fillText(element, elementX, elementY);
}

export const clearElementInStack = (index: number) => {
    let {startX, startY, gridWidth, gridHeight, fontSize} = stackLayer;
    startY += index * gridHeight;
    let offsetX = Math.round(gridWidth * 0.2);
    let offsetY = Math.round(gridHeight * 0.2);
    let x = startX + offsetX;
    let y = startY + offsetX;
    let width = gridWidth - (offsetX * 2);
    let height = gridHeight - (offsetY * 2);
    ctx.clearRect(x, y, width, height);
}

export const drawVisualRepresentation = () => {
    drawStack();
    drawIndexLayer();
    drawPointer(-1);
} 