var Road = function(id){
    this.id = id;
    this.numOfLanes = 2;
    // Terminal will be an array of size 2 which will have id's of 2 junctions
    this.junctions = [];
}

Road.prototype.registerJunction = function (junction) {
    if(junctions.length == 0){
        junctions.push(junction);
    }else if(junctions.length == 1){
        if(junctions[0].getID() != junction.getID()){
            junctions.push(junction);
        }
    }
};

Road.prototype.getID = function () {
    return this.id;
};

Road.prototype.setNumOfLanes = function (numOfLanes) {
    this.numOfLanes = numOfLanes;
};
