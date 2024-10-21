"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, tipo, fuerza, ataqueHechizo, capaMagica, nuevoHechizo) {
        var _this = _super.call(this, nombre, tipo, fuerza) || this;
        _this.ataque = ataqueHechizo;
        _this.defensa = capaMagica;
        _this.poder = nuevoHechizo;
        return _this;
    }
    Mago.prototype.getAtaque = function () {
        console.log("El mago ".concat(this.nombre, " ataca con ").concat(this.ataque));
    };
    Mago.prototype.getDefensa = function () {
        console.log("El mago ".concat(this.nombre, " defensa con ").concat(this.defensa));
    };
    Mago.prototype.getPoder = function () {
        console.log("El mago ".concat(this.nombre, " tiene ").concat(this.poder));
    };
    Mago.prototype.nuevaHabilidad = function (tipo) {
        this.tipo = tipo;
        console.log("El mago ".concat(this.nombre, " ha ganado un nuevo poder ").concat(this.poder));
    };
    Mago.prototype.setVida = function (vida) {
        if (vida == 0) {
            console.log("El mago ".concat(this.nombre, " ha muerto"));
        }
        else {
            this.vida = vida;
        }
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
