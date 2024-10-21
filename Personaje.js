"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, tipo, vida) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
    }
    Personaje.prototype.getHabilidad = function () {
        return this.tipo;
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getTipo = function () {
        return this.tipo;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.setVida = function (vida) {
        if (vida == 0) {
            console.log("El personaje ".concat(this.nombre, " ha muerto"));
        }
        else {
            this.vida = vida;
        }
    };
    return Personaje;
}());
exports.Personaje = Personaje;
