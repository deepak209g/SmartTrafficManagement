// <reference path="./Junction.ts" />
var Road = (function () {
    function Road() {
    }
    Road.prototype.registerJunction = function (jun) {
        if (this.junctions.length == 0) {
            this.junctions.push(jun);
        }
        else if (this.junctions.length == 1) {
            if (this.junctions[0].id != jun.id) {
                this.junctions.push(jun);
            }
        }
    };
    Road.prototype.setNumOfLanes = function (lanes) {
        this.numOfLanes = lanes;
    };
    return Road;
}());
