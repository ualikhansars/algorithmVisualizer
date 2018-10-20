import { 
    drawElementInStack,
    clearElementInStack,
} from './drawStack';

import {movePointer} from './animations';

let top = -1;
let maxSize = 10;

class StackVisual {
    static push(element: string) {
        return new Promise(resolve => {
            top += 1;
            if(top < maxSize) {
                movePointer(top - 1, top).then(() => resolve());
            }
        });
    }

    static pop() {
        if(top >= 0) {
            clearElementInStack(top);
            movePointer(top, top - 1);
            top -= 1;
        }
    }
}

export default StackVisual;