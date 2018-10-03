import { 
    drawElementInStack,
    movePointer 
} from './drawStack';

class StackVisual {
    private top = -1;
    private maxSize = 10;

    push(element: string) {
        this.top += 1;
        if(this.top < this.maxSize) {
            drawElementInStack(element, this.top);
            movePointer(this.top - 1, this.top);
        }
    }
}

export default StackVisual;