export const isStringInUrl = (searchValue: string): boolean => {
    let url = window.location.href;
    if(url.indexOf(searchValue) != -1) {
        return true;
    }
    return false;
}