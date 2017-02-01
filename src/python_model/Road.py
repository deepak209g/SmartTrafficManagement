import math
from queue import Queue
class Road(object):
    road_id=0
    def __init__(self, j1, j2):
        Road.road_id+=1
        self.id = Road.road_id
        self.junctions = (j1, j2)
        self.towards_j1 = Queue()
        self.towards_j2 = Queue()

    def __eq__(self, road):
        return self.id == road.id
    
    def get_length(self):
        diff_x = self.junctions[0].x - self.junctions[1].x
        diff_y = self.junctions[0].y - self.junctions[1].y
        return math.sqrt(diff_x**2 + diff_y**2)

    def add_vehicle(self, from_junction, vehicle):
        if from_junction == self.junctions[0]:
            self.towards_j2.put_nowait(vehicle)
        else:
            self.towards_j1.put_nowait(vehicle)
    
    def remove_vehicle(self, junction):
        if junction == self.junctions[0]:
            return self.towards_j1.get_nowait()
        else:
            return self.towards_j2.get_nowait()
    
    def get_other_junction(self, jn):
        if jn == self.junctions[0]:
            return self.junctions[1]
        else:
            return self.junctions[0]