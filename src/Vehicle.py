from Junction import Junction
from Road import Road
from queue import Queue
from queue import PriorityQueue
from Map import Map
import math
class Vehicle(object):
    def __init__(self, sj: Junction, ej: Junction):
        self.goal_junction = ej
        self.start_junction = sj
        temp_road = next(iter(sj.roads))
        self.current_road = temp_road
        self.towards_junction = temp_road.get_other_junction(sj)
        self.location = sj.location
        self.path = Queue()

    def set_road(self, road: Road):
        self.current_road = road
        self.towards_junction = road.get_other_junction(self.towards_junction)

    def __min_dist_junction(dist):
        min = float('Inf')
        toret = None
        for key in dist:
            if dist[key] < min:
                min = dist[key]
                toret = key
        return toret
                

    def compute_path(self, map: Map):
        '''Implement dfs shortest path algo here
            Make a path queue to be used by other methods'''
        dist = {}
        prev = {}
        q = set()

        for junction in map.junctions:
            dist[junction] = float('Inf')
            prev[junction] = None
            q.add(junction)
            
        dist[self.start_junction] = 0
        
        while len(q) > 0:
            u = self.__min_dist_junction(dist)
            q.remove(u)

            for road in u.roads:
                r = (Road)road
                v = r.get_other_junction(u)
                alt = dist[u] + r.get_length()
                if alt < dist[v]:
                    dist[v] = alt
                    prev[v] = u

        print("Still to implement")