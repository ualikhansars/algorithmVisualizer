// TODO: change priority queue to Heap

class PriorityQueue {
    private elements: any = []
    insert(key: any, priority: Number) {
        this.elements.push({
            key: key,
            value: priority
        });
    }

    update(key: any, newPriority: Number) {
        for(let element of this.elements) {
            if(element.key == key) {
                element.value = newPriority; 
            }
        }
    }

    extractMin() {
        let min = this.elements[0];
        let minIndex = 0;
        for(let i = 1; i < this.elements.length; ++i) {
            if(this.elements[i].value < min.value) {
                min = this.elements[i];
                minIndex = i;
            }
        }
        this.elements = this.elements.filter((el: any) => {
            if(el.key === min.key) {
              return false;
            }
            return true;
        });
        return min;
    }

    isEmpty() {
        if(this.elements.length !== 0) {
            return true;
        } else {
            return false;
        }
    }
}

export default PriorityQueue;