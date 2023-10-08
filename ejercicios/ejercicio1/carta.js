
class Carta {
    constructor(palo, valor) {
      this.palo = palo;
      this.valor = valor
    }
  
    getValor() {
      if (this.valor === 'A') {
        return 11;
      } else if (this.valor === 'J' || this.valor === 'Q' || this.valor === 'K') {
        return 10;
      } else {
        return parseInt(this.valor);
      }
        /* 
        * TODO: Devolver el valor de la carta
        * 2-10 valen su valor
        * J, Q, K valen 10
        * A vale 11 
        */
    }
  }

export default Carta;

