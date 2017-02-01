class Map(object):
    def __init__(self):
        self.junctions = set()
    
    def add_junction(self, junction):
        self.junctions.add(junction)
    
    