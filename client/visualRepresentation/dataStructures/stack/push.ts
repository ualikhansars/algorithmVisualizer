export const  onStackPush = () => {
    let input: any = document.getElementById("stackPush");
    input.addEventListener('click', (e: any) => {
        let value = '';
        let element: any = document.getElementById("stackInput");
        if(element) value = element.value;  
        console.log('value', value);
    });
}