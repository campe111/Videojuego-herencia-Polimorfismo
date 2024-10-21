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
exports.Dragon = void 0;
var Personaje_1 = require("./Personaje");
var Dragon = /** @class */ (function (_super) {
    __extends(Dragon, _super);
    function Dragon(nombre, tipo, fuerza, escupeFuego, defensaEscamas, stormFire) {
        var _this = _super.call(this, nombre, tipo, fuerza) || this;
        _this.atacar = escupeFuego;
        _this.defensa = defensaEscamas;
        _this.poder = stormFire;
        return _this;
    }
    Dragon.prototype.getAtacar = function () {
        console.log("El drag\u00F3n ".concat(this.nombre, " ataca con ").concat(this.atacar));
    };
    Dragon.prototype.getDefensa = function () {
        console.log("El drag\u00F3n ".concat(this.nombre, " defensa con ").concat(this.defensa));
    };
    Dragon.prototype.getPoder = function () {
        console.log("El drag\u00F3n ".concat(this.nombre, " tiene ").concat(this.poder));
    };
    Dragon.prototype.nuevaHabilidad = function (tipo) {
        this.tipo = tipo;
        console.log("El drag\u00F3n ".concat(this.nombre, " ha ganado un nuevo poder ").concat(this.poder));
    };
    Dragon.prototype.setVida = function (vida) {
        if (vida == 0) {
            console.log("El drag\u00F3n ".concat(this.nombre, " ha muerto"));
        }
        else {
            this.vida = vida;
        }
    };
    return Dragon;
}(Personaje_1.Personaje));
exports.Dragon = Dragon;
