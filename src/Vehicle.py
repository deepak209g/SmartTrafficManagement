from Junction import Junction
from Road import Road
class Vehicle(object):
    def __init__(self, sj: Junction, ej: Junction):
        self.goal_junction = ej
        self.start_junction = sj
        temp_road = next(iter(sj.roads))
        self.current_road = temp_road
        self.towards_junction = temp_road.get_other_junction(sj)
        self.location = sj.location

    def set_road(self, road: Road):
        self.current_road = road
        self.towards_junction = road.get_other_junction(self.towards_junction)

    
