/// <reference path="./Junction.ts" />
/// <reference path="Vehicle.ts" />
/// <reference path="Utils/PriorityQueue.ts" />
var Lane = (function () {
    function Lane(toJunction) {
        var _this = this;
        this.toJunction = toJunction;
        var comparatorTowardsOne = function (a, b) {
            var destination = _this.toJunction.location;
            var dista = destination.distance(a.location);
            var distb = destination.distance(b.location);
            return dista < distb;
        };
        this.queue = new PriorityQueue();
    }
    // move vehicle to this lane
    Lane.prototype.addVehicle = function (vehicle) {
        this.queue.add(vehicle);
    };
    // remove the front vehicle from this lane
    Lane.prototype.removeVehicle = function () {
        return this.queue.remove();
    };
    return Lane;
}());
var Road = (function () {
    function Road(id) {
        this.id = id;
        this.lanes = null;
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
            var lanesBytwo = lanes >> 1;
            this.lanes = new Array(lanes);
            for (var j = 0; j < this.junctions.size(); j++) {
                var jun = this.junctions.getItem(j);
                for (var i = 0; i < lanesBytwo; i++) {
                    this.lanes.push(new Lane(jun));
                }
            }
        }
        this.numOfLanes = lanes;
        // return true as the no. of lanes was set.
        return true;
    };
    // returns an array of lanes which leads to the given junction
    Road.prototype.getLanesTowardsJunction = function (jun) {
        var toret = [];
        for (var i = 0; i < this.lanes.length; i++) {
            if (this.lanes[i].toJunction.equals(jun)) {
                toret.push(this.lanes[i]);
            }
        }
        if (toret.length == 0) {
            // no lanes going to the provided junction
            return null;
        }
        else {
            return toret;
        }
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
