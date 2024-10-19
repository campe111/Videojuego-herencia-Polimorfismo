import { Mago } from "./Mago";
import { Dragon } from "./Dragon";
import { Caballero } from "./Caballero";
import { CajaMagica } from "./CajaMagic";

const mago = new Mago("Dynamo", "Mago", 100, "Hechizo", "Capa magica", "Aresto Momentum");
const dragon = new Dragon("Griffin", "Dragon", 100, "Fuego", "Escamas", "Bola de Fuego");
const caballero = new Caballero("Sir Lancelot", "Caballero", 100, "Espada", "Escudo", "Martillo de Acero");


// mago.getAtaque();
// dragon.getAtacar();
// caballero.getAtaque();
// dragon.nuevaHabilidad("Bola de Fuego");
// caballero.nuevaHabilidad("Martillo de Acero");
// mago.nuevaHabilidad("Aresto Momentum");


// console.log(mago.getVida());
// console.log(dragon.getVida());
// console.log(caballero.getVida());

// mago.getDefensa();
// dragon.getDefensa();
// caballero.getDefensa();
// ---------------------------------------PUNTO EXTRA-EVOLUCION DE PERSONAJES----------

const cajaMagica = new CajaMagica();

cajaMagica.otorgarHabilidades([mago, dragon, caballero]);
mago.getHabilidad();
dragon.getHabilidad();
caballero.getHabilidad();
console.log(`El mago ${mago.getNombre()} ha evolucionado al abrir la caja magica y tiene una nueva habilidad: ${mago.getHabilidad()}`);
console.log(`El dragon ${dragon.getNombre()} ha evolucionado al abrir la caja magica y tiene una nueva habilidad: ${dragon.getHabilidad()}`);
console.log(`El caballero ${caballero.getNombre()} ha evolucionado al abrir la caja magica y tiene una nueva habilidad: ${caballero.getHabilidad()}`);