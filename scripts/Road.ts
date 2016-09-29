/// <reference path="./Junction.ts" />
/// <reference path="Vehicle.ts" />
/// <reference path="Utils/PriorityQueue.ts" />



interface TwoWayRoads {
    towardsJunction1: Array<PriorityQueue<Vehicle>>;
    towardsJunction2: Array<PriorityQueue<Vehicle>>;
}
class Lane {
    queue: PriorityQueue<Vehicle>;
    toJunction: Junction;
    constructor(toJunction: Junction) {
        this.toJunction = toJunction;
        let comparatorTowardsOne = (a: Vehicle, b: Vehicle) => {
            let destination: Point = this.toJunction.location;
            let dista = destination.distance(a.location);
            let distb = destination.distance(b.location);
            return dista < distb;
        }
        this.queue = new PriorityQueue<Vehicle>();
    }
    // move vehicle to this lane
    addVehicle(vehicle: Vehicle) {
        this.queue.add(vehicle);
    }
    // remove the front vehicle from this lane
    removeVehicle() {
        return this.queue.remove();
    }
}
class Road {
    id: number;
    numOfLanes: number;
    lanes: Array<Lane>;
    junctions: Set<Junction>;
    constructor(id: number) {
        this.id = id;
        this.lanes = null;
        this.junctions = new Set<Junction>();
        this.numOfLanes = null;
    }

    registerJunction(jun: Junction) {
        if (this.junctions.size() == 0) {
            this.junctions.add(jun);
        } else if (this.junctions.size() == 1) {
            if (this.junctions.getItem(0).id != jun.id) {
                this.junctions.add(jun);
            }
        }
    }
    setNumOfLanes(lanes: number) {
        if (lanes % 2 == 1) {
            return false;
        }
        if (lanes >= 2) {
            let lanesBytwo = lanes >> 1;
            this.lanes = new Array(lanes);
            for (let j = 0; j < this.junctions.size(); j++) {
                let jun = this.junctions.getItem(j);
                for (let i = 0; i < lanesBytwo; i++) {
                    this.lanes.push(new Lane(jun));
                }
            }

        }
        this.numOfLanes = lanes;

        // return true as the no. of lanes was set.
        return true;
    }

    // returns an array of lanes which leads to the given junction
    getLanesTowardsJunction(jun: Junction) {
        let toret: Array<Lane> = [];
        for (let i = 0; i < this.lanes.length; i++) {
            if (this.lanes[i].toJunction.equals(jun)) {
                toret.push(this.lanes[i]);
            }
        }
        if (toret.length == 0) {
            // no lanes going to the provided junction
            return null;
        } else {
            return toret;
        }

    }

    equals(road: Road) {
        if (road == null) {
            return false;
        } else if (this.id == road.id) {
            return true;
        }
        return false;
    }

}