import StackVisual from './StackVisual';

let stackVisual = new StackVisual();
export const onStackPush = () => {
    let pushButton: any = document.getElementById("stackPush");
    pushButton.addEventListener('click', (e: any) => {
        let element: any = document.getElementById("stackInput");
        if(element && element.value) {
           stackVisual.push(element.value);
           element.value = '';
           pushButton.disabled = true;
           setTimeout(() => pushButton.disabled = false, 2000);
        }
    });
}