import { initializeCanvas } from "../../../common/canvas";
import BSTSettings from "./BSTSettings";

export const initializeBST = () => {
    initializeCanvas(BSTSettings.canvasArea, BSTSettings.codeControlArea);
}