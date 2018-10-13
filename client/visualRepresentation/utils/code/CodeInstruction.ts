class CodeInstruction {
    private instructions: any;

    addToInstructions(line: number, nextInstructionLine: number, animation: Function) {
        let instruction = new InstructionDetails(line, nextInstructionLine, animation);
        this.instructions[line] = instruction;
    }

    processCode(line: number) {
        const instruction = this.instructions[line];
    }
}

class InstructionDetails {
    line: number = 0;
    nextInstructionLine: number = 1;
    animation: any;

    constructor(line: number, nextInstructionLine: number, animation: any) {
        this.line = line;
        this.nextInstructionLine = nextInstructionLine;
        this.animation = animation;
    }
}

export default CodeInstruction;