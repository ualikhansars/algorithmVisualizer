export const canvas: any = document.getElementById('dataStructuresCanvas');
export const codeCanvas: any = document.getElementById('codeCanvas');
export let ctx: any;
export let codeCtx: any;

if(canvas) {
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.border = "7px solid #000";
    ctx = canvas.getContext('2d');
}

if(codeCanvas) {
    codeCanvas.width = 300;
    codeCanvas.height = 600;
    codeCanvas.style.border = "7px solid #000";
    codeCtx = codeCanvas.getContext('2d');
}