import { Personaje } from "./Videojuego";
class Dragon extends Personaje {
    private atacar:string;
    private defensa:string;
    private poder: string;
    constructor(nombre: string, tipo: string, fuerza: number, escupeFuego: string, defensaEscamas: string , stormFire:string) {
        super(nombre, tipo, fuerza);
        this.atacar = escupeFuego;
        this.defensa = defensaEscamas;
        this.poder = stormFire;
    }
    public getAtacar(): void {
        console.log(`El dragón ${this.nombre} ataca con ${this.atacar}`);
    }
    public getDefensa(): void {
        console.log(`El dragón ${this.nombre} defensa con ${this.defensa}`);
    }

    public getPoder(): void {
        console.log(`El dragón ${this.nombre} tiene ${this.poder}`);
    }

    public nuevaHabilidad(tipo: string): void {
        this.tipo = tipo;
        console.log(`El dragón ${this.nombre} ha ganado un nuevo poder ${this.poder}`);
    }

    public setVida(vida: number): void {
        if (vida == 0) {
            console.log(`El dragón ${this.nombre} ha muerto`);
        } else {
            this.vida = vida;
        }
    }
}

export { Dragon };