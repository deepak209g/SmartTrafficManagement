/// <reference path="Road.ts" />
var VehicleTypes;
(function (VehicleTypes) {
    VehicleTypes[VehicleTypes["CAR"] = 1] = "CAR";
    VehicleTypes[VehicleTypes["BUS"] = 2] = "BUS";
    VehicleTypes[VehicleTypes["BIKE"] = 3] = "BIKE";
})(VehicleTypes || (VehicleTypes = {}));
var Vehicle = (function () {
    function Vehicle(type) {
        this.type = type;
    }
    Vehicle.prototype.setRoad = function (road) {
        this.currentRoad = road;
    };
    Vehicle.prototype.getRoad = function () {
        return this.currentRoad;
    };
    Vehicle.prototype.setLocation = function (location) {
        this.location = location;
    };
    // returns true if it is possible to move ahead
    // returns false if at a junction;
    Vehicle.prototype.moveAhead = function () {
        if (this.location.equals(this.towardsJunction.location)) {
            // reached at towardsJunction. Now take a decision to move.
            // 1. Wait for the signal to turn green
            // 2. If signal is green, pick a new road to travel to;
            return false;
        }
        else {
            var dist = Point.distance(this.location, this.towardsJunction.location);
            if (dist <= this.speed) {
                this.location = this.towardsJunction.location;
            }
            else {
                this.location.move(this.towardsJunction.location, this.speed);
            }
            return true;
        }
    };
    // updates the current road of the vehicle
    Vehicle.prototype.moveToRoad = function (newRoad, towardsJunction) {
        // update currentRoad
        this.currentRoad = newRoad;
        // update towardsJunction
        if (towardsJunction) {
            // towardsJunction given
            this.towardsJunction = towardsJunction;
        }
        else {
            // towardsJunction not given
            // assume continuous movement as if crossing the junction;
            var junctions = newRoad.junctions;
            if (junctions.size() == 2) {
                if (this.towardsJunction.equals(junctions.getItem(0))) {
                    this.towardsJunction = junctions.getItem(1);
                }
                else if (this.towardsJunction.equals(junctions.getItem(1))) {
                    this.towardsJunction = junctions.getItem(0);
                }
            }
        }
    };
    return Vehicle;
}());
