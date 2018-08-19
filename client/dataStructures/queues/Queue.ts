class Queue {
    private size: number = 1000;
    private head: number = 0;
    private tail: number = 0;
    private elements: any[] = [];
    
    enqueue(value: any) {
        this.elements[this.tail] = value;
        if(this.tail === this.size) {
            this.tail = 0;
        } else {
            this.tail += 1;
        } 
    }

    dequeue() {
        if(this.head === this.tail) {
            throw new Error('queue underflow');
        } else {
            let element = this.elements[this.head];
            if(this.head === this.size) {
                this.head = 0;
            } else {
                this.head += 1;
            }
            return element;
        }
    }
}

export default Queue;