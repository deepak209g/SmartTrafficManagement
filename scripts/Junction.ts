/// <reference path="Utils/Set.ts" />
/// <reference path="Road.ts" />

class Point {
    x: number;
    y: number;
    distance(point : Point){
        let distx = this.x - point.x;
        let disty = this.y - point.y;
        return Math.sqrt(distx*distx + disty*disty);
    }
    static distance(p1 : Point, p2 : Point){
        let distx = p2.x - p1.x;
        let disty = p2.y - p1.y;
        return Math.sqrt(distx*distx + disty*disty);
    }
    equals(point: Point){
        if(point == null){
            return false;
        }else{
            if(point.x == this.x && point.y == this.y){
                return true;
            }
            return false;
        }
    }
    move(to: Point, dist: number){
        let distx = to.x - this.x;
        let disty = to.y - this.y;
        let mod = Math.sqrt(distx*distx + disty*disty);
        distx /= mod;
        disty /= mod;
        let delx = distx*dist;
        let dely = disty*dist;
        this.x = this.x + delx;
        this.y = this.y + dely;
    }
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
