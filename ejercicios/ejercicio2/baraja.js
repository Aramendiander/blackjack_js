//import { fileURLToPath } from "url";
import Carta from "../ejercicio1/carta.js";

class Baraja {
    constructor() {
        this.cartas = [];
        const palos = ["corazones", "diamantes", "tréboles", "picas"];
        const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for(let i = 0 ; i < palos.length ; i++) {
            for(let j = 0 ; j < valores.length ; j++) {
                this.cartas.push(new Carta(palos[i],valores[j]))
            }
        }
        /*
        * TODO: Crear crear una carta de cada palo y valor y guardarla en la baraja
        */
    }
  
    mezclar() {
        let currentIndex = this.cartas.length
        let randomIndex;
        while (currentIndex > 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cartas[currentIndex], this.cartas[randomIndex]] = [
                this.cartas[randomIndex], this.cartas[currentIndex]];
        }
        /* 
        * TODO: Mezclar las cartas de la baraja
        * SUGERENCIA DE LECTURA: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
        * SUGERENCIA DE LECTURA: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        * No devuelve nada
        */
    }
  
    sacarCarta() {
        /*
        * TODO: Sacar una carta de la baraja
        * se debe sacar la última carta de la baraja y devolverla
        */

       return this.cartas.pop();
    }
  }

    export default Baraja;
