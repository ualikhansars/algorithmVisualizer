import StackVisual from './StackVisual';
import {codeInstructionLines} from './stackSettings';
import {codeInstruction} from './instructions';

const stackVisual = new StackVisual();
export const stackListener = () => {
    let pushButton: any = document.getElementById("stackPush");
    pushButton.addEventListener('click', (e: any) => {
        let element: any = document.getElementById("stackInput");
        if(element && element.value) {
            codeInstruction.processCode(codeInstructionLines.push, [element.value]);
            pushButton.disabled = true;
            setTimeout(() => pushButton.disabled = false, 2000);
        }
    });

    let popButton: any = document.getElementById('stackPop');
    popButton.addEventListener('click', (e: any) => {
        codeInstruction.processCode(codeInstructionLines.pop, []);
        pushButton.disabled = true;
        setTimeout(() => pushButton.disabled = false, 2000);
    });
}