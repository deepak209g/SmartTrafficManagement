var SimpleNode = (function () {
    function SimpleNode(data) {
        this.data = data;
        this.next = null;
    }
    return SimpleNode;
}());
var Queue = (function () {
    function Queue() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    Queue.prototype.enqueue = function (item) {
        if (this.count == 0) {
            this.head = new SimpleNode(item);
            this.tail = this.head;
        }
        else {
            var tempNode = new SimpleNode(item);
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
        this.count++;
    };
    Queue.prototype.dequeue = function (item) {
        if (this.count < 1) {
            return null;
        }
        else if (this.count == 1) {
            var tempNode = this.head;
            var val = tempNode.data;
            this.head = null;
            this.tail = null;
            this.count--;
            return val;
        }
        else {
            var nextNode = this.head.next;
            var val = this.head.data;
            this.head.next = null;
            this.head = nextNode;
            this.count--;
            return val;
        }
    };
    Queue.prototype.size = function () {
        return this.count;
    };
    return Queue;
}());
