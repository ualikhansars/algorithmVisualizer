import {ctx} from './canvas';
import {
    indexLayer,
    stackLayer
} from './stackSettings';
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

export const drawIndexLayer = (size: number = 10) => {
    let x = indexLayer.startX;
    let y = indexLayer.startY;
    ctx.font = "18px serif";
    for(let i = 0; i < size; ++i) {
        let textX = x + (indexLayer.gridWidth / 2);
        let textY = y + (indexLayer.gridHeight / 2);
        ctx.fillText(i, textX, textY);
        y += indexLayer.gridHeight;
    }
}

export const drawVisualRepresentation = () => {
    drawStack();
    drawIndexLayer();
} 