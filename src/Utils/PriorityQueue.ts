// implementation same as https://github.com/lemire/FastPriorityQueue.js
class PriorityQueue<T>{
    list: Array<T>;
    size: number;
    compare: Function;
    constructor(comparator?: Function) {
        this.list = new Array();
        this.size = 0;
        this.compare = comparator || this.defaultComparator;
    }
    defaultComparator(a: T, b: T) {
        return a < b;
    }


    // Add an element the the queue
    // runs in O(log n) time
    add(myval: T) {
        let i = this.size;
        this.list[this.size++] = myval;
        while (i > 0) {
            let p = (i - 1) >> 1;
            let ap = this.list[p];
            if (!this.compare(myval, ap)) break;
            this.list[i] = ap;
            i = p;
        }
        this.list[i] = myval;
    }

    // replace the content of the heap by provided array and "heapifies it"
    heapify(arr: Array<T>) {
        this.list = arr;
        this.size = arr.length;
        for (let i = (this.size >> 1); i >= 0; i--) {
            this.percolateDown(i);
        }
    }

    private percolateDown(i: number) {
        var size = this.size;
        var hsize = this.size >>> 1;
        var ai = this.list[i];
        while (i < hsize) {
            var l = (i << 1) + 1;
            var r = l + 1;
            var bestc = this.list[l];
            if (r < size) {
                if (this.compare(this.list[r], bestc)) {
                    l = r;
                    bestc = this.list[r];
                }
            }
            if (!this.compare(bestc, ai)) {
                break;
            }
            this.list[i] = bestc;
            i = l;
        }
        this.list[i] = ai;
    }

    private percolateUp(i: number) {
        var myval = this.list[i];
        while (i > 0) {
            var p = (i - 1) >> 1;
            var ap = this.list[p];
            if (!this.compare(myval, ap)) break;
            this.list[i] = ap;
            i = p;
        }
        this.list[i] = myval;
    }
    peek() {
        if (this.size > 0) {
            return this.list[0];
        } else {
            return null;
        }
    }

    remove() {
        var ans = this.list[0];
        if (this.size > 1) {
            this.list[0] = this.list[--this.size];
            this.percolateDown(0 | 0);
        } else {
            --this.size;
        }
        return ans;
    }

    trim(){
        this.list = this.list.slice(0,this.size);
    }
    isEmpty(){
        return this.size == 0;
    }

}