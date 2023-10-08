//import { fileURLToPath } from "url";
import Baraja from "../ejercicio2/baraja.js";

class Mano {
    constructor() {
        /*
        * TODO: Inicializar la propiedad cartas como un array vacío
        */
       this.cartas = []
    }
  
    agregarCarta(carta) {

        /*
        * TODO: Agregar una carta a la mano
        */
        this.cartas.push(carta);
    }
  
    getValor() {
      let valor = 0;
      let tieneAs = false;

      /*
      * TODO: Calcular el valor de la suma de las cartas
      * Si la mano tiene un As y la suma es mayor que 21, restar 10 a la suma
      */
      for (let carta of this.cartas) {
        valor += carta.getValor();
        if(carta.getValor() === 'A') {
          tieneAs = true;
        }
      }

      if(valor > 21 && tieneAs ) {
        valor -= 10;
      }
      
      return valor;
    }

  }
  export default Mano;
