class Stack {

    private maxSize: number = 1000;
    private top = -1;
    private elements: any[] = [];
   
    stackEmpty() {
        if(this.top === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    push(x: any) {
        if(this.top === this.maxSize) {
            return new Error('Stack overflow');
        } else {
            this.top += 1;
            this.elements[this.top] = x;
        }
    }

    pop(s: any) {
        if(this.stackEmpty) {
            return new Error('Stack underflow');
        } else {
            this.top -= 1;
            return this.elements[this.top + 1];
        }
    }
}