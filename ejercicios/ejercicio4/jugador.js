//import { fileURLToPath } from "url";
import Mano from "../ejercicio3/mano.js"
import Baraja from "../ejercicio2/baraja.js";

class Jugador {
    constructor(mano) {
      this.mano = new Mano()
      this.plantado = false;
        /*
        * TODO: Inicializar la propiedad mano como un objeto de la clase Mano y la propiedad plantado a false
        */
    }
  
    agregarCarta(carta) {
        /*
        * TODO: Agregar una carta a la mano
        * Si el valor de la mano es mayor que 21, plantarse
        */
       this.mano.agregarCarta(carta)
       if (this.mano.getValor() > 21) {
          this.plantado = true;
       }
    }
    plantarse() {
      /*
      * TODO: Cambiar la propiedad plantado a true
      */
     this.plantado = true;
    }
  
    mostrarMano(oculto=false) {
        /*
        * TODO: Devolver un string con las cartas de la mano
        * Si oculto es true, mostrar sólo la primera carta, el resto mostrarlas como "?"
        * Ejemplo: "A de corazones, ?"
        * Si oculto es false, mostrar todas las cartas
        * Ejemplo: "A de corazones, 2 de corazones"
        */
       
      let cartas = this.mano.cartas.map((carta,index) =>{
        let texto = '';
        if (index !== 0 && oculto) {
          texto = '?';
        } else {
          texto = `${carta.valor} de ${carta.palo}`;
        }
        return texto;
      })
       return cartas.join(", ");
        
        return " no tiene cartas";
    }
  }

    export default Jugador;

