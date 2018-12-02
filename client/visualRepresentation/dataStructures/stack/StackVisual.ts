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

    movePointerIncrement(value: string) {
        return new Promise(resolve => {
            top = top + 1;
            if(top < maxSize) {
                movePointer(top - 1, top).then(() => resolve());
            }
        });
    }

    movePointerDecrement(value: string) {
        return new Promise(resolve => {
            top = top - 1;
            if(top >= -1) {
                movePointer(top + 1, top).then(() => resolve());
            }
        });
    }

    removeElement() {
        return new Promise(resolve => {
            if(top < maxSize && top + 1 >= 0) {
                setTimeout(() => {
                    clearElementInStack(top + 1);
                });
                resolve();
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