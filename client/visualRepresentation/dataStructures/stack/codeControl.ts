import {codeCtx} from './canvas';
import Code from '../../utils/code/Code';
import {codeInstruction} from './instructions';
import {drawElementInStack} from './drawStack';
import StackVisual from './StackVisual';

let code = new Code(codeCtx);
const stackVisual = new StackVisual();
export const codeControl = () => {
    code.codeLine(1, 'push(value):');
    codeInstruction.addToInstructions(1, 2, null);
    code.codeLine(2, 'top = top + 1');
    codeInstruction.addToInstructions(2, 3, stackVisual.movePointer);
    code.codeLine(2, 'elements[i] = value');
    codeInstruction.addToInstructions(3, null, stackVisual.addElement);
    code.newLine();
    code.codeLine(1, 'pop():');
    code.codeLine(2, 'top = top - 1');
    code.codeLine(2, 'return elements[top + 1]');
}