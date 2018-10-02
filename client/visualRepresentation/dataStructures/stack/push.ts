import StackVisual from './StackVisual';

let stackVisual = new StackVisual();
export const onStackPush = () => {
    let input: any = document.getElementById("stackPush");
    input.addEventListener('click', (e: any) => {
        let element: any = document.getElementById("stackInput");
        if(element) {
           stackVisual.push(element.value);
        }
    });
}