interface Point {
    x: number;
    y: number;
}

class Set<T> {
    list: T[];
    constructor(){
        this.list = [];
    }
    add(item: T) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                break;
            }
        }
        this.list.push(item);
    }
    contains(item: T) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                return true;
            }
        }
        return false;
    }
    remove(item: T) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
                break;
            }
        }
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
