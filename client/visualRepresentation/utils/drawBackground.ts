import {loadImage} from './loadImage';
import {WIDTH, HEIGHT} from '../config/map';
import {backgroundCtx} from '../config/canvas/canvasLoader';

export const drawBackground = (src:string) => {
    loadImage(src, (err:any, img:any) => {
        if(err) {
            throw new Error('Cannot load image ' + src);
        }
        backgroundCtx.drawImage(img, 0, 0, WIDTH, HEIGHT);
    });
}