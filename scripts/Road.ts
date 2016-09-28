/// <reference path="./Junction.ts" />
/// <reference path="Utils/Queue.ts" />

interface TwoWayRoads{
    junction1: Array<Queue<Vehicle>>;
    junction2: Array<Queue<Vehicle>>;
}
class Road{
    id: number;
    numOfLanes: number;
    lanes: TwoWayRoads;
    junctions: Set<Junction>;
    constructor(id: number){
        this.id = id;
        this.lanes = {
            junction1: null,
            junction2: null
        };
        this.junctions = new Set<Junction>();
        this.numOfLanes = null;
    }
    registerJunction(jun: Junction){
        if(this.junctions.size() == 0){
            this.junctions.add(jun);
        }else if(this.junctions.size() == 1){
            if(this.junctions.getItem(0).id != jun.id){
                this.junctions.add(jun);
            }
        }
    }
    setNumOfLanes(lanes : number){
        if(lanes%2 == 1){
            return false;
        }
        if(lanes >= 2){
            this.lanes.junction1 = new Array<Queue<Vehicle>>(lanes>>1);
            this.lanes.junction2 = new Array<Queue<Vehicle>>(lanes>>1);
        }
        this.numOfLanes = lanes;
        
        
    }
    equals(road: Road){
        if(road == null){
            return false;
        }else if(this.id == road.id){
            return true;
        }
        return false;
    }
    
}