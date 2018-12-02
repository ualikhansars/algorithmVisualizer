import { drawVisualRepresentation } from "./drawStack";
import { codeControl } from "./codeControl";
import { initializeCanvas } from "../../common/canvas";
import { canvasArea, codeControlArea } from "./stackSettings";
import { initCodeInstruction } from "./instructions";

export const initializeStack = () => {
    initializeCanvas(canvasArea, codeControlArea)
    .then(() => {
        initCodeInstruction().then(
            () => {
                drawVisualRepresentation();
                codeControl();
            }
        );
    });
}