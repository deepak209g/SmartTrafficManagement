/// <reference path="Utils/Set.ts" />
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
