// implementation same as https://github.com/lemire/FastPriorityQueue.js
var PriorityQueue = (function () {
    function PriorityQueue(comparator) {
        this.list = new Array();
        this.size = 0;
        this.compare = comparator || this.defaultComparator;
    }
    PriorityQueue.prototype.defaultComparator = function (a, b) {
        return a < b;
    };
    // Add an element the the queue
    // runs in O(log n) time
    PriorityQueue.prototype.add = function (myval) {
        var i = this.size;
        this.list[this.size++] = myval;
        while (i > 0) {
            var p = (i - 1) >> 1;
            var ap = this.list[p];
            if (!this.compare(myval, ap))
                break;
            this.list[i] = ap;
            i = p;
        }
        this.list[i] = myval;
    };
    // replace the content of the heap by provided array and "heapifies it"
    PriorityQueue.prototype.heapify = function (arr) {
        this.list = arr;
        this.size = arr.length;
        for (var i = (this.size >> 1); i >= 0; i--) {
            this.percolateDown(i);
        }
    };
    PriorityQueue.prototype.percolateDown = function (i) {
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
    };
    PriorityQueue.prototype.percolateUp = function (i) {
        var myval = this.list[i];
        while (i > 0) {
            var p = (i - 1) >> 1;
            var ap = this.list[p];
            if (!this.compare(myval, ap))
                break;
            this.list[i] = ap;
            i = p;
        }
        this.list[i] = myval;
    };
    PriorityQueue.prototype.peek = function () {
        if (this.size > 0) {
            return this.list[0];
        }
        else {
            return null;
        }
    };
    PriorityQueue.prototype.remove = function () {
        var ans = this.list[0];
        if (this.size > 1) {
            this.list[0] = this.list[--this.size];
            this.percolateDown(0 | 0);
        }
        else {
            --this.size;
        }
        return ans;
    };
    PriorityQueue.prototype.trim = function () {
        this.list = this.list.slice(0, this.size);
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.size == 0;
    };
    return PriorityQueue;
}());
