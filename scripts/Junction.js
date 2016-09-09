var Junction = function(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.roads = [];
}

Junction.prototype.registerRoad = function(road) {
    if (!this.hasRoad(road)) {
        this.roads.push(road);
        road.registerJunction(this);
    }
};

Junction.prototype.hasRoad = function(road) {
    for (var i = 0; i < road.length; i++) {
        if (this.roads[i].getID() == road.getID()) {
            return true;
        }
    }
    return false;
};

Junction.prototype.getID = function() {
    return this.id;
};

// Hydra.module.register("trafficManager", function (action) {
//     return {
//         events: {
//             // 'channel': {
//             //     'button:click': function (oData) {
//             //         this._logClick(oData.sButtonType);
//             //     }
//             // }
//         },
//         init: function() {
//             // Code that will be executed when this module is started.
//         }
//     };
// });
