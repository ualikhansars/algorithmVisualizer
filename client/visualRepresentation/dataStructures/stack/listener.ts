import {codeInstructionLines} from './stackSettings';
import {codeInstruction} from './instructions';

export const stackListener = () => {
    let pushButton: any = document.getElementById("stackPush");
    if(pushButton) {
        pushButton.addEventListener('click', (e: Event) => {
            let element: any = document.getElementById("stackInput");
            if(element && element.value) {
                codeInstruction.processCode(codeInstructionLines.push, [element.value]);
                pushButton.disabled = true;
                setTimeout(() => pushButton.disabled = false, 2000);
            }
        });
    }
    

    let popButton: any = document.getElementById('stackPop');
    if(popButton) {
        popButton.addEventListener('click', (e: Event) => {
            codeInstruction.processCode(codeInstructionLines.pop, []);
            pushButton.disabled = true;
            setTimeout(() => pushButton.disabled = false, 2000);
        });
    }
}