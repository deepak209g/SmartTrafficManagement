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
    move() {
        // if in the middle of the road, move to the towardsJunction
        if (this.location.equals(this.towardsJunction.location)) {
            // reached at towardsJunction. Now take a decision to move.
            // 1. Wait for the signal to turn green
            // 2. If signal is green, pick a new road to travel to;
            
        } else {
            let dist = Point.distance(this.location, this.towardsJunction.location);
            if (dist <= this.speed) {
                this.location = this.towardsJunction.location;
            } else {
                this.location.move(this.towardsJunction.location, this.speed);
            }
        }

    }
}
