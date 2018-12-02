import CodeInstruction from '../../utils/code/CodeInstruction';
export let codeInstruction: CodeInstruction;

export const initCodeInstruction = () => {
    return new Promise(resolve => {
        codeInstruction = new CodeInstruction();
        resolve();
    });
}