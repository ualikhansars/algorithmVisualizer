import {codeCtx} from './canvas';
import {
    codeControlCanvas
} from './stackSettings';
import Code from '../../utils/code/Code';

let code = new Code(codeCtx);
export const codeControl = () => {
    code.codeLine(1, '// this is sample code');
    code.codeLine(1, 'for(int i = 0; i < 10; ++i) {');
    code.codeLine(2, 'print(i)');
    code.codeLine(1, '}');
}