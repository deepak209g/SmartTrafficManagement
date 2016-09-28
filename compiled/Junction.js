/// <reference path="Utils/Set.ts" />
/// <reference path="Road.ts" />
/// <reference path="Utils/Point.ts" />
var Junction = (function () {
    function Junction(id, loc) {
        this.id = id;
        this.location = loc;
        this.roads = new Set();
    }
    Junction.prototype.registerRoad = function (road) {
        this.roads.add(road);
    };
    Junction.prototype.hadRoad = function (road) {
        var list = this.roads;
        for (var i = 0; i < list.size(); i++) {
            if (list.getItem(i).equals(road)) {
                return true;
            }
        }
        return false;
    };
    Junction.prototype.hasRoadWithID = function (id) {
        var list = this.roads;
        for (var i = 0; i < list.size(); i++) {
            if (list.getItem(i).id == id) {
                return true;
            }
        }
        return false;
    };
    Junction.prototype.hasRoad = function (road) {
        return this.roads.contains(road);
    };
    Junction.prototype.equals = function (junction) {
        if (junction == null) {
            return false;
        }
        else if (this.id == junction.id) {
            return true;
        }
        return false;
    };
    return Junction;
}());
