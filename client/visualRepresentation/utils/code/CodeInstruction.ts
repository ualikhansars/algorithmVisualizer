import Code from './Code';
import {codeCtx} from '../../common/canvas';

class CodeInstruction {
    private instructions: any = {};
    private code: Code;

    constructor() {
        if(codeCtx) {
            this.code = new Code(codeCtx);
        } 
        else {
            throw new Error("Undefined")
        }
    }

    addToInstructions(line: number, nextInstructionLine: number | null, animation: Function | null) {
        let instruction = new InstructionDetails(line, nextInstructionLine, animation);
        this.instructions[line] = instruction;
    }

    processCode(line: number, parameters: any[]) {
        const instruction = this.instructions[line];
        if(!instruction) return;
        this.code.colorCodeLine(line);
        if(instruction.animation) {
            instruction.animation(...parameters).then(
                () => {
                    setTimeout(() => {
                        this.code.removeCodeLine(line);
                        this.processCode(instruction.nextInstructionLine, parameters);
                    }, 2000); 
                } 
            );
        } else {
            setTimeout(() => {
                this.code.removeCodeLine(line);
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