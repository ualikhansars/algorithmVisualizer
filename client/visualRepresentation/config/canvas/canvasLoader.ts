export const background: any = document.getElementById('backgroundCanvas');
export let backgroundCtx: any;

if(background) {
    background.width = 1000;
    background.height = 600;
    background.style.border = "7px solid #000";
    backgroundCtx = background.getContext('2d');
}