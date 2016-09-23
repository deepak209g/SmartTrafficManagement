/// <reference path="./Junction.ts" />

class Road{
    id: number;
    numOfLanes: number;
    junctions: Junction[];
    registerJunction(jun: Junction){
        if(this.junctions.length == 0){
            this.junctions.push(jun);
        }else if(this.junctions.length == 1){
            if(this.junctions[0].id != jun.id){
                this.junctions.push(jun);
            }
        }
    }
    setNumOfLanes(lanes : number){
        this.numOfLanes = lanes;
    }
    
}