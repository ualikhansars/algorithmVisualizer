import { 
    drawElementInStack,
    clearElementInStack,
} from './drawStack';

import {movePointer} from './animations';

let top = -1;
let maxSize = 10;

class StackVisual {

    addElement(value: string) {
        return new Promise(resolve => {
            if(top < maxSize) {
                setTimeout(() => {
                    drawElementInStack(value, top);
                }, 1000);
                resolve();
            }
        });
    }

    movePointer(value: string) {
        return new Promise(resolve => {
            top = top + 1;
            if(top < maxSize) {
                movePointer(top - 1, top).then(() => resolve());
            }
        });
    }

    pop() {
        if(top >= 0) {
            clearElementInStack(top);
            movePointer(top, top - 1);
            top -= 1;
        }
    }
}

export default StackVisual;