class LinkedListNode {
    public key: any;
    public prev: any;
    public next: any;

    constructor(key: any = null, prev: any = null, next: any = null) {
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {

    private head: any = null;
    private tail: any = null;

    search(key: any) {
        let x = this.head;
        while(x != null && x.key !== key) {
            x = x.next;
        }
        return x;
    }

    insert(newElementKey: any) {
        let newElement: LinkedListNode = new LinkedListNode(newElementKey, null, this.head);
        if(this.head != null) {
            this.head.prev = newElement;
        } else {
            this.tail = newElement;
        }
        newElement.prev = null;
        this.head = newElement;
    }

    insertBack(newElementKey: any) {
        let newElement: LinkedListNode = new LinkedListNode(newElementKey, null, null);
        if(this.head == null) {
            this.head = newElement;
        }
        if(this.tail != null) {
            this.tail.next = newElement;
            newElement.prev = this.tail;
        }
        newElement.next = null;
        this.tail = newElement;
    }

    delete(key: any) {
        let foundElement = this.search(key);
        if(foundElement != null) {
            if(foundElement.prev != null) {
                foundElement.prev.next = foundElement.next;
            } else {
                this.head = foundElement.next;
            }
            if(foundElement.next != null) {
                foundElement.next.prev = foundElement.prev;
            } else {
                this.tail = foundElement.prev;
            }
        }
    }
}

export default DoublyLinkedList;