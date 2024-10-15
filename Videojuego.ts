abstract class Personaje {
    protected nombre: string;
    protected tipo: string;
    protected vida: number;
    constructor(nombre: string, tipo: string, vida: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
    }
    abstract nuevaHabilidad(tipo: string): void;
    public getHabilidad(): string {
        return this.tipo;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public getVida(): number {
        return this.vida;
    }
    public setVida(vida: number): void {
        if (vida == 0) {
            console.log(`El personaje ${this.nombre} ha muerto`);
        } else {
            this.vida = vida;
        }
    }
}
export { Personaje };