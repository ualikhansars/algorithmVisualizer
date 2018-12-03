export const BSTListener = () => {
    let insertButton: any = document.getElementById("BSTInsert");
    if(insertButton) {
        insertButton.addEventListener('click', (e: Event) => {
            let element: any = document.getElementById("BSTInsertIntput");
            if(element && element.value) {
                console.error("insert value", element.value);
            }
        });
    }

    let searchButton = document.getElementById("BSTSearch");
    if(searchButton) {
        searchButton.addEventListener('click', (e: Event) => {
            let element: any = document.getElementById("BSTSearchIntput");
            if(element && element.value) {
                console.error("search value", element.value);
            }
        });
    }

    let deleteButton = document.getElementById("BSTDelete");
    if(deleteButton) {
        deleteButton.addEventListener('click', (e: Event) => {
            let element: any = document.getElementById("BSTDeleteIntput");
            if(element && element.value) {
                console.error("delete value", element.value);
            }
        });
    }
}