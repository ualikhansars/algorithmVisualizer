import { codeCtx } from '../../common/canvas';
import Code from '../../utils/code/Code';
import { codeInstruction } from './instructions';
import StackVisual from './StackVisual';

export const codeControl = () => {
    let code = new Code(codeCtx);
    const stackVisual = new StackVisual();
    code.codeLine(1, 'push(value):');
    codeInstruction.addToInstructions(1, 2, null);
    code.codeLine(2, 'top = top + 1');
    codeInstruction.addToInstructions(2, 3, stackVisual.movePointerIncrement);
    code.codeLine(2, 'elements[i] = value');
    codeInstruction.addToInstructions(3, null, stackVisual.addElement);
    code.newLine();
    code.codeLine(1, 'pop():');
    codeInstruction.addToInstructions(5, 6, null);
    code.codeLine(2, 'top = top - 1');
    codeInstruction.addToInstructions(6, 7, stackVisual.movePointerDecrement);
    code.codeLine(2, 'return elements[top + 1]');
    codeInstruction.addToInstructions(7, null, stackVisual.removeElement);
}