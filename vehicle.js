var vehicleTypes = ["CAR", "BUS", "BIKE"];
var vehicle = function(config) {
    this.type = this.types(type);
    Object.keys(config).forEach(function (key) {
        this[key] = config[key];
    })
};
vehicle.validateType = function(type) {
    for(var vehicle in vehicleTypes){
        if(vehicle === type){
            return vehicle;
        }
    }
    return "CAR";
};
