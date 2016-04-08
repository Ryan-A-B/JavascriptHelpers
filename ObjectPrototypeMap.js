/* Rough equivalent of Array.prototype.map for Object */
Object.prototype.map = function (callback) {
    var result = [];

    var i = 0;
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            result[key] = callback(key, this[key], i, this);
            i++;
        }
    }
    
    return result;
}
