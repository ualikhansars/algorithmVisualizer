import {loadImage} from '../loadImage';

export const drawImage = 
(
    ctx: any, 
    src: string, 
    x: number = 0, 
    y: number = 0,
    width: number = 16,
    height: number = 16
) => {
    loadImage(src, (err:any, img:any) => {
        if(err) {
            throw new Error('Cannot load image ' + src);
        }
        ctx.drawImage(img, x, y, width, height);
    });
}