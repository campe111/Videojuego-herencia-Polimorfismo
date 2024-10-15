import { Personaje } from "./Videojuego";
class Mago extends Personaje {
    private ataque: string;
    private defensa: string;
    private poder: string;
    constructor(nombre: string, tipo: string, fuerza: number, ataqueHechizo: string, capaMagica: string , nuevoHechizo:string) {
        super(nombre, tipo, fuerza);
        this.ataque = ataqueHechizo;
        this.defensa = capaMagica;
        this.poder = nuevoHechizo;  
    }
    
    public getAtaque(): void {
        console.log(`El mago ${this.nombre} ataca con ${this.ataque}`);
        
    }
    public getDefensa(): void {
        console.log(`El mago ${this.nombre} defensa con ${this.defensa}`);
    }

    public getPoder(): void {
        console.log(`El mago ${this.nombre} tiene ${this.poder}`);
    }
    public nuevaHabilidad(tipo: string): void {
        this.tipo = tipo;
        console.log(`El mago ${this.nombre} ha ganado un nuevo poder ${this.poder}`);
    }

    public setVida(vida: number): void {
        if (vida == 0) {
            console.log(`El mago ${this.nombre} ha muerto`);
        } else {
            this.vida = vida;
        }
    }
}

export { Mago };
