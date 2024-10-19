import { Personaje } from "./Videojuego";
class CajaMagica {
    private habilidades: string[];

    constructor() {
        this.habilidades = [
            "Telequinesis",
            "Invocación",
            "Escudo Mágico",
            "Fuerza Sobrehumana",
            "Invisibilidad",
            "Rayo de Hielo"
        ];
    }

    public otorgarHabilidades(personajes: Personaje[]): void {
        for (let i = 0; i < personajes.length; i++) {
            const habilidadAleatoria = this.habilidades[i % this.habilidades.length]; // Asignación circular
            personajes[i].nuevaHabilidad(habilidadAleatoria);
        }
    }

    public getHabilidades(): string[] {
        return this.habilidades;
}
}

export { CajaMagica };