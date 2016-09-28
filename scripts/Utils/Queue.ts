class SimpleNode<T>{
    data: T;
    next: SimpleNode<T>;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Queue<T>{
    private count: number;
    head: SimpleNode<T>;
    tail: SimpleNode<T>;
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    enqueue(item: T) {
        if (this.count == 0) {
            this.head = new SimpleNode(item);
            this.tail = this.head;
        } else {
            let tempNode: SimpleNode<T> = new SimpleNode(item);
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
        this.count++;
    }
    dequeue(item: T) {
        if (this.count < 1) {
            return null;
        } else if (this.count == 1) {
            let tempNode: SimpleNode<T> = this.head;
            let val: T = tempNode.data;
            this.head = null;
            this.tail = null;
            this.count--;
            return val;
        } else {
            let nextNode: SimpleNode<T> = this.head.next;
            let val: T = this.head.data;
            this.head.next = null;
            this.head = nextNode;
            this.count--;
            return val;
        }
    }

    size(){
        return this.count;
    }
}