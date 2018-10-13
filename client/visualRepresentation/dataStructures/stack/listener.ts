import StackVisual from './StackVisual';
import {codeInstructionLines} from './stackSettings';
import CodeInstruction from '../../utils/code/CodeInstruction';

let stackVisual = new StackVisual();
let codeInstruction = new CodeInstruction();
export const stackListener = () => {
    let pushButton: any = document.getElementById("stackPush");
    pushButton.addEventListener('click', (e: any) => {
        let element: any = document.getElementById("stackInput");
        if(element && element.value) {
        //    stackVisual.push(element.value);
        //    element.value = '';
            codeInstruction.processCode(codeInstructionLines.push);
            pushButton.disabled = true;
            setTimeout(() => pushButton.disabled = false, 2000);
        }
    });

    let popButton: any = document.getElementById('stackPop');
    popButton.addEventListener('click', (e: any) => {
        stackVisual.pop();
        popButton.disabled = true;
        setTimeout(() => popButton.disabled = false, 2000);
    });
}