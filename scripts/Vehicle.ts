/// <reference path="Road.ts" />

enum VehicleTypes {
    CAR = 1,
    BUS,
    BIKE
}
class Vehicle {
    type: VehicleTypes;
    private currentRoad: Road;
    speed: number;
    location: Point;
    towardsJunction: Junction;
    constructor(type: VehicleTypes) {
        this.type = type;
    }
    setRoad(road: Road) {
        this.currentRoad = road;
    }
    getRoad() {
        return this.currentRoad;
    }
    setLocation(location: Point) {
        this.location = location;
    }
    // returns true if it is possible to move ahead
    // returns false if at a junction;
    moveAhead() {
        if (this.location.equals(this.towardsJunction.location)) {
            // reached at towardsJunction. Now take a decision to move.
            // 1. Wait for the signal to turn green
            // 2. If signal is green, pick a new road to travel to;
            return false;
        } else {
            let dist = Point.distance(this.location, this.towardsJunction.location);
            if (dist <= this.speed) {
                this.location = this.towardsJunction.location;
            } else {
                this.location.move(this.towardsJunction.location, this.speed);
            }
            return true;
        }

    }

    // updates the current road of the vehicle
    moveToRoad(newRoad: Road, towardsJunction?: Junction) {
        // update currentRoad
        this.currentRoad = newRoad;
        
        // update towardsJunction
        if(towardsJunction){
            // towardsJunction given
            this.towardsJunction = towardsJunction;
        }else{
            // towardsJunction not given
            // assume continuous movement as if crossing the junction;
            let junctions = newRoad.junctions;
            if(junctions.size() == 2){
                if(this.towardsJunction.equals(junctions.getItem(0))){
                    this.towardsJunction = junctions.getItem(1);
                }else if(this.towardsJunction.equals(junctions.getItem(1))){
                    this.towardsJunction = junctions.getItem(0);
                }
            }
        }
    }
}

