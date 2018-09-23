export const canvas: any = document.getElementById('dataStructuresCanvas');
export let ctx: any;

if(canvas) {
    canvas.width = 1000;
    canvas.height = 600;
    canvas.style.border = "7px solid #000";
    ctx = canvas.getContext('2d');
}