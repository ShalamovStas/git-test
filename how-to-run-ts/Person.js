"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.toString = function () {
        return "[".concat(this.name, " - ").concat(this.surName, "]");
    };
    return Person;
}());
exports.Person = Person;
