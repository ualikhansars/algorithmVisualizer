import {drawImage} from '../../utils/draw/drawImage';
import {pointerLayer} from './stackSettings';
import {ctx} from '../../common/canvas';

export const movePointer = (prevIndex: number, nextIndex: number) => {
    return new Promise(resolve => {
        const {startY, gridHeight} = pointerLayer;
        let currentY = (startY + gridHeight) + (prevIndex * gridHeight);
        let nextY = (startY + gridHeight) + (nextIndex * gridHeight);
        let directionY = nextIndex - prevIndex;
        animatePointer(currentY, nextY, directionY).then(() => resolve());
    });
}

const animatePointer = (currentY: number, nextY: number, directionY: number) => {
    return new Promise(resolve => {
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
        resolve();
    });
}