class Set<T> {
    private list: T[];
    constructor(){
        this.list = [];
    }
    add(item: T) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                break;
            }
        }
        this.list.push(item);
    }
    contains(item: T) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                return true;
            }
        }
        return false;
    }
    remove(item: T) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
                break;
            }
        }
    }
    size(){
        return this.list.length;
    }
    getItem(index: number){
        return this.list[index];
    }
}