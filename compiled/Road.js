/// <reference path="./Junction.ts" />
/// <reference path="Utils/Queue.ts" />
/// <reference path="Utils/PriorityQueue.ts" />
var Road = (function () {
    function Road(id) {
        this.id = id;
        this.lanes = {
            junction1: null,
            junction2: null
        };
        this.junctions = new Set();
        this.numOfLanes = null;
    }
    Road.prototype.registerJunction = function (jun) {
        if (this.junctions.size() == 0) {
            this.junctions.add(jun);
        }
        else if (this.junctions.size() == 1) {
            if (this.junctions.getItem(0).id != jun.id) {
                this.junctions.add(jun);
            }
        }
    };
    Road.prototype.setNumOfLanes = function (lanes) {
        if (lanes % 2 == 1) {
            return false;
        }
        if (lanes >= 2) {
            this.lanes.junction1 = new Array(lanes >> 1);
            this.lanes.junction2 = new Array(lanes >> 1);
        }
        this.numOfLanes = lanes;
    };
    Road.prototype.equals = function (road) {
        if (road == null) {
            return false;
        }
        else if (this.id == road.id) {
            return true;
        }
        return false;
    };
    return Road;
}());
