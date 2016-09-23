var Set = (function () {
    function Set() {
        this.list = [];
    }
    Set.prototype.add = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                break;
            }
        }
        this.list.push(item);
    };
    Set.prototype.contains = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                return true;
            }
        }
        return false;
    };
    Set.prototype.remove = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
                break;
            }
        }
    };
    return Set;
}());
var Junction = (function () {
    function Junction(id, loc) {
        this.id = id;
        this.location = loc;
        this.roads = new Set();
    }
    Junction.prototype.registerRoad = function (road) {
        this.roads.add(road);
    };
    Junction.prototype.hadRoad = function (id) {
        var list = this.roads.list;
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return true;
            }
        }
        return false;
    };
    Junction.prototype.hasRoad = function (road) {
        return this.roads.contains(road);
    };
    return Junction;
}());
