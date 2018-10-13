import { 
    drawElementInStack,
    clearElementInStack,
} from './drawStack';

import {movePointer} from './animations';

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

    pop() {
        if(this.top >= 0) {
            clearElementInStack(this.top);
            movePointer(this.top, this.top - 1);
            this.top -= 1;
        }
    }
}

export default StackVisual;