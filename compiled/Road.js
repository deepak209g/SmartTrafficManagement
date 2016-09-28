/// <reference path="./Junction.ts" />
var Road = (function () {
    function Road() {
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
