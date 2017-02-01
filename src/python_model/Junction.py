class Junction(object):
    "Defines a junction in the model!"
    def __init__(self, id, loc):
        self.id = id
        self.location = loc
        self.roads = set()

    def register_road(self, road):
        self.roads.add(road)
    
    def has_road(self, road):
        return road in self.roads
    
    def has_road_with_id(self, id):
        for road in self.roads:
            if road.id == id:
                return True
        return False
    
    def __eq__(self, junction):
        return self.id == junction.id