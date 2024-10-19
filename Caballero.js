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
exports.Caballero = void 0;
var Videojuego_1 = require("./Videojuego");
var Caballero = /** @class */ (function (_super) {
    __extends(Caballero, _super);
    function Caballero(nombre, habilidad, fuerza, ataqueEspada, defensaEscudo, martilloDeFuego) {
        var _this = _super.call(this, nombre, habilidad, fuerza) || this;
        _this.ataque = ataqueEspada;
        _this.defensa = defensaEscudo;
        _this.poder = martilloDeFuego;
        return _this;
    }
    Caballero.prototype.getAtaque = function () {
        console.log("El caballero ".concat(this.nombre, " ataca con ").concat(this.ataque));
    };
    Caballero.prototype.getDefensa = function () {
        console.log("El caballero ".concat(this.nombre, " defensa con ").concat(this.defensa));
    };
    Caballero.prototype.getPoder = function () {
        console.log("El caballero ".concat(this.nombre, " tiene ").concat(this.poder));
    };
    Caballero.prototype.nuevaHabilidad = function (tipo) {
        this.tipo = tipo;
        console.log("El caballero ".concat(this.nombre, " ha ganado un nuevo poder ").concat(this.poder));
    };
    Caballero.prototype.setVida = function (vida) {
        if (vida == 0) {
            console.log("El caballero ".concat(this.nombre, " ha muerto"));
        }
        else {
            this.vida = vida;
        }
    };
    return Caballero;
}(Videojuego_1.Personaje));
exports.Caballero = Caballero;
