import { Personaje } from "./Personaje";
class Caballero extends Personaje {
    private ataque: string;
    private defensa: string;
    private poder: string;
    constructor(nombre: string, habilidad: string, fuerza: number, ataqueEspada: string, defensaEscudo: string , martilloDeFuego:string) {
        super(nombre, habilidad, fuerza);
        this.ataque = ataqueEspada;
        this.defensa = defensaEscudo;
        this.poder = martilloDeFuego;
    }
    public getAtaque(): void {
        console.log(`El caballero ${this.nombre} ataca con ${this.ataque}`);
    }
    public getDefensa(): void {
        console.log(`El caballero ${this.nombre} defensa con ${this.defensa}`);
    }

    public getPoder(): void {
        console.log(`El caballero ${this.nombre} tiene ${this.poder}`);
    }

    public nuevaHabilidad(tipo: string): void {
        this.tipo = tipo;
        console.log(`El caballero ${this.nombre} ha ganado un nuevo poder ${this.poder}`);
    }

    public setVida(vida: number): void {
        if (vida == 0) {
            console.log(`El caballero ${this.nombre} ha muerto`);
        } else {
            this.vida = vida;
        }
    }
}
export { Caballero };