"use strict";
var Punto = /** @class */ (function () {
    function Punto(num1, num2) {
        this.x = num1;
        this.y = num2;
        this.suma = 0;
    }
    Punto.prototype.mostrarValores = function (n1, n2) {
        this.suma = n1 + n2 + this.x + this.y;
        return this.suma;
    };
    return Punto;
}());
var p = new Punto(0, 0);
//console.log(p.x-p.y);
//console.log("La suma de las cosas que enviaste es : \n");
alert("La suma de las cosas que enviaste es : \n" + p.mostrarValores(2, 3));
