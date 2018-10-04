import {
    canvasArea,
    codeControlArea
} from './stackSettings';
import { codeControl } from './codeControl';

export const canvas: any = document.getElementById('dataStructuresCanvas');
export const codeCanvas: any = document.getElementById('codeCanvas');
const container: any = document.getElementsByClassName('canvasContainer');
export let ctx: any;
export let codeCtx: any;

if(canvas) {
    canvas.position = 'absolute';
    canvas.left = 0;
    canvas.width = canvasArea.width;
    canvas.height = canvasArea.height;
    canvas.style.border = "7px solid #000";
    ctx = canvas.getContext('2d');
}

if(codeCanvas) {
    codeCanvas.position = 'absolute';
    codeCanvas.left = codeControlArea.width;
    codeCanvas.width = codeControlArea.width;
    codeCanvas.height = codeControlArea.height;
    codeCanvas.style.border = "7px solid #000";
    codeCtx = codeCanvas.getContext('2d');
}

if(container) {
    container.position = 'relative';
}