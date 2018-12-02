export const canvas: any = document.getElementById('dataStructuresCanvas');
export const codeCanvas: any = document.getElementById('codeCanvas');
const container: any = document.getElementsByClassName('canvasContainer');
export let ctx: any;
export let codeCtx: any;

export const initializeCanvas = (canvasArea: Area, codeControlArea: Area) => {
    return new Promise(resolve => {
        if(canvas) {
            canvas.width = canvasArea.width;
            canvas.height = canvasArea.height;
            canvas.style.border = "7px solid #000";
            ctx = canvas.getContext('2d');
        }
        
        if(codeCanvas) {
            codeCanvas.width = codeControlArea.width;
            codeCanvas.height = codeControlArea.height;
            codeCanvas.style.border = "7px solid #000";
            codeCtx = codeCanvas.getContext('2d');
        }
        
        if(container) {
            container.position = 'relative';
        }
        resolve();
    });
}
