class LinkedListNode {
    private key: any;
    private prev: number;
    private next: number;

    constructor(key: any, prev: number, next: number) {
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {

    private head: any = null;
    private tail: any = null;

    search(k: any) {
        let x = this.head;
        while(x != null && x.key !== k) {
            x = x.next;
        }
        return x;
    }

    insert(newElement: any) {
        newElement.next = this.head;
        if(this.head != null) {
            this.head.prev = newElement;
        }
        this.head = newElement;
        newElement.prev = null;
    }

    delete(element: any) {
        if(element.prev != null) {
            element.prev.next = element.next;
        } else {
            this.head = element.next;
        }
        if(element.next != null) {
            element.next.prev = element.prev;
        }
    }
}