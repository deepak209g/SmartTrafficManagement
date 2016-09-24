/// <reference path="Utils/Set.ts" />

interface Point {
    x: number;
    y: number;
}

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
    hadRoad(id: number) {
        let list = this.roads.list;
        for (let i = 0; i < list.length; i++) {
            if(list[i].id == id){
                return true;
            }
        }
        return false;
    }
    hasRoad(road: Road){
        return this.roads.contains(road);
    }
}
