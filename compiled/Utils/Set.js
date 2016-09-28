var Set = (function () {
    function Set() {
        this.list = [];
    }
    Set.prototype.add = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                break;
            }
        }
        this.list.push(item);
    };
    Set.prototype.contains = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                return true;
            }
        }
        return false;
    };
    Set.prototype.remove = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
                break;
            }
        }
    };
    Set.prototype.size = function () {
        return this.list.length;
    };
    Set.prototype.getItem = function (index) {
        return this.list[index];
    };
    return Set;
}());
