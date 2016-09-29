/// <reference path="Utils/Set.ts" />
/// <reference path="Road.ts" />
/// <reference path="Utils/Point.ts" />

class Junction {
    id: number;
    location: Point;
    roads: Set<Road>;
    constructor(id: number, loc: Point) {
        this.id = id;
        this.location = loc;
        this.roads = new Set<Road>();
    }
    registerRoad(road: Road) {
        this.roads.add(road);
    }
    hadRoad(road: Road) {
        let list = this.roads;
        for (let i = 0; i < list.size(); i++) {
            if(list.getItem(i).equals(road)){
                return true;
            }
        }
        return false;
    }
    hasRoadWithID(id: number){
        let list = this.roads;
        for (let i = 0; i < list.size(); i++) {
            if(list.getItem(i).id == id){
                return true;
            }
        }
        return false;
    }
    hasRoad(road: Road){
        return this.roads.contains(road);
    }
    equals(junction: Junction){

        if(junction == null){
            return false;
        }else if(this.id == junction.id){
            return true;
        }
        return false;
    }
}
