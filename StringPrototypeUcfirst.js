/* Function that returns the string with the first letter as uppercase */
String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
