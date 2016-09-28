/// <reference path="./Junction.ts" />

class Road{
    id: number;
    numOfLanes: number;
    junctions: Set<Junction>;
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