var Point = (function () {
    function Point() {
    }
    Point.prototype.distance = function (point) {
        var distx = this.x - point.x;
        var disty = this.y - point.y;
        return Math.sqrt(distx * distx + disty * disty);
    };
    Point.distance = function (p1, p2) {
        var distx = p2.x - p1.x;
        var disty = p2.y - p1.y;
        return Math.sqrt(distx * distx + disty * disty);
    };
    Point.prototype.equals = function (point) {
        if (point == null) {
            return false;
        }
        else {
            if (point.x == this.x && point.y == this.y) {
                return true;
            }
            return false;
        }
    };
    Point.prototype.move = function (to, dist) {
        var distx = to.x - this.x;
        var disty = to.y - this.y;
        var mod = Math.sqrt(distx * distx + disty * disty);
        distx /= mod;
        disty /= mod;
        var delx = distx * dist;
        var dely = disty * dist;
        this.x = this.x + delx;
        this.y = this.y + dely;
    };
    return Point;
}());
