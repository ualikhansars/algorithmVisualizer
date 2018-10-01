import { drawElementInStack } from './drawStack';

export const StackVisual =  {
    top: -1,
    maxSize: 10,

    push(element: string) {
        this.top += 1;
        if(this.top < this.maxSize) {
            drawElementInStack(element, this.top);
        }
    }
}