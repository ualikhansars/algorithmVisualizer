import {codeCtx} from './canvas';
import Code from '../../utils/code/Code';

let code = new Code(codeCtx);
export const codeControl = () => {
    code.codeLine(1, 'push(value):');
    code.codeLine(2, 'top = top + 1');
    code.codeLine(2, 'elements[i] = value');
    code.newLine();
    code.codeLine(1, 'pop():');
    code.codeLine(2, 'top = top - 1');
    code.codeLine(2, 'return elements[top + 1]');
}