import Code from './Code';
import {codeCtx} from '../../dataStructures/stack/canvas';

const code = new Code(codeCtx);

class CodeInstruction {
    private instructions: any = {};

    addToInstructions(line: number, nextInstructionLine: number | null, animation: Function | null) {
        let instruction = new InstructionDetails(line, nextInstructionLine, animation);
        this.instructions[line] = instruction;
    }

    processCode(line: number, parameters: any[]) {
        const instruction = this.instructions[line];
        code.colorCodeLine(line);
        if(instruction.nextInstructionLine === null) return;
        if(instruction.animation) {
            instruction.animation(...parameters).then(
                () => {
                    code.removeCodeLine(line);
                    this.processCode(instruction.nextInstructionLine, parameters);
                } 
            );
        } else {
            setTimeout(() => {
                code.removeCodeLine(line);
                this.processCode(instruction.nextInstructionLine, parameters);
            }, 2000);
        }
    }
}

class InstructionDetails {
    line: number = 0;
    nextInstructionLine: number | null;
    animation?: Function | null;

    constructor(line: number, nextInstructionLine: number | null, animation: Function | null) {
        this.line = line;
        this.nextInstructionLine = nextInstructionLine;
        this.animation = animation;
    }
}

export default CodeInstruction;