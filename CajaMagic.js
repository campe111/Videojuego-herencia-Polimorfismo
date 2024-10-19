"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajaMagica = void 0;
var CajaMagica = /** @class */ (function () {
    function CajaMagica() {
        this.habilidades = [
            "Telequinesis",
            "Invocación",
            "Escudo Mágico",
            "Fuerza Sobrehumana",
            "Invisibilidad",
            "Rayo de Hielo"
        ];
    }
    CajaMagica.prototype.otorgarHabilidades = function (personajes) {
        for (var i = 0; i < personajes.length; i++) {
            var habilidadAleatoria = this.habilidades[i % this.habilidades.length]; // Asignación circular
            personajes[i].nuevaHabilidad(habilidadAleatoria);
        }
    };
    CajaMagica.prototype.getHabilidades = function () {
        return this.habilidades;
    };
    return CajaMagica;
}());
exports.CajaMagica = CajaMagica;
