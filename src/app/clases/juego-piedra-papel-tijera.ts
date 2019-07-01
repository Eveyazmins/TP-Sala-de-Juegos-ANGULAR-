/*import { Juego } from '../clases/juego';


export class JuegoPiedraPapelTijera extends Juego {

    opcionMaquina:number;
    resultado = null;
    compu:string;
    gana:boolean;
    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super(nombre, gano,jugador, intentos, resultado);  
        this.opcionMaquina = null;
        this.nombre = "Piedra, Papel o Tijera";
          }

        public verificar()
        {
                return this.gana;
        
        }
        
        public eleccionMaquina()
        {
            this.opcionMaquina = Math.floor( Math.random()*3)+1;
            console.log("Esto es la opcion elegida " +this.opcionMaquina);
            var respuesta:string;
            
            switch(this.opcionMaquina)
            {
                case 1:
                    respuesta = "Piedra";
                    break;
                case 2:
                    respuesta = "Papel";
                    break;
                case 3:
                    respuesta = "Tijera";
                    break;
            }
            this.compu=respuesta;
            return respuesta;
        
        }


        public Jugar(opcionUsuario:string)
        {
            
           let maquina = this.eleccionMaquina();

            switch(opcionUsuario)
            {
                case "Piedra":
                    if(maquina == "Papel")
                    {
                        this.resultado = "Perdiste, la piedra es envuelta por el papel";
                        this.gana = false;
                    }
                        else
                        if(maquina =="Tijera")
                        {
                            this.resultado = "Ganaste, la piedra Rompe la Tijera";
                            this.gana = true;
                        }
                            else
                            this.resultado = "Empataron, ambos eligieron la Piedra";
                            this.gana = false;
                break;

                case "Papel":
                    if(maquina == "Tijera")
                    {
                        this.resultado = "Perdiste, la tijera corta el papel";
                        this.gana = false;
                    }
                        else
                        
                        if(maquina =="Piedra"){
                            this.resultado = "Ganaste, el papel envuelve la Piedra";
                            this.gana = true;
                        }
                        else
                            this.resultado = "Empataron, ambos eligieron Papel";
                            this.gana = false;
                break;

                case "Tijera":
                    if(maquina == "Piedra"){
                        this.resultado = "Perdiste, la piedra rompe la tijera";
                        this.gana = false;
                        
                    }
                        else
                        if(maquina =="papel")
                        {
                            this.resultado = "Ganaste, la tijera corta el papel";
                            this.gana = true;
                        }
                            else
                            this.resultado = "Empataron, ambos eligieron la tijera";
                            this.gana = false;
                break;
            }
            return this.resultado;
        }
}
*/

import { Juego } from '../clases/juego';

export class JuegoPiedraPapelTijera extends Juego {

    elecccionJugador:number =0;
    eleccionRandom:number =0;
    resultado:boolean;

    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        //super("Piedra-Papel-Tijera",gano,jugador);
        super(nombre, gano,jugador, intentos, resultado);
        //this.jugador =localStorage.getItem("jugador");
        this.nombre = "Piedra, Papel o Tijera";
      }

      /*
          constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super(nombre, gano,jugador, intentos, resultado);  
        this.opcionMaquina = null;
        this.nombre = "Piedra, Papel o Tijera";
          }
      */

      arrayPalabras : Array <any> = [
        {palabra: "pierda",id:1},
        {palabra: "papel",id:2},
        {palabra: "tijera",id:3},
    ];

      public asignarPPT(eleccionAux:number) {       
        let random = Math.floor(Math.random() * this.arrayPalabras.length);
        this.eleccionRandom = this.arrayPalabras[random].id;
        this.elecccionJugador = eleccionAux;

        

        //console.log(idAux);
        // for (var i = 0; i < this.arrayPalabras.length; ++i) {
        // 	if (this.arrayPalabras[i].id == idAux) {
        // 		console.log(this.arrayPalabras[i]);
        // 	}
        // }

    }



    public verificar(): boolean {
        switch (this.elecccionJugador) {
            case 1:
                if (this.eleccionRandom == 1) {
                  this.resultado = null;
                }
                if (this.eleccionRandom == 2) {
                  this.resultado = false;
                }
                if (this.eleccionRandom == 3) {
                  this.resultado = true;
                }
              break;
            case 2:
                if (this.eleccionRandom == 1) {
                    this.resultado = true;
                }
                if (this.eleccionRandom == 2) {
                    this.resultado = null;
                }
                if (this.eleccionRandom ==3) {
                    this.resultado = false;
                }
              break;
            case 3:
                if (this.eleccionRandom == 1) {
                    this.resultado = false;
                }
                if (this.eleccionRandom == 2) {
                    this.resultado = true;
                }
                if (this.eleccionRandom == 3) {
                    this.resultado = null;
                }
              
              break;
          }
        return this.resultado;

    }
}