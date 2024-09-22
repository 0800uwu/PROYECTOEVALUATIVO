import { Component } from '@angular/core';
//IMPORTAMOS LA INTERFAZ PARA CIUDAD
import { Mueble } from 'src/app/models/muebles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA --> TIPO ARRAY
  public info: Mueble[];

// INICIALIZAR LA PROPIEDAD INFO
constructor() {
    this.info = [
        {
          id: "",
          nombre: "PLACARD EN 3 MODULOS ARMADO",
          tipo: "placard",
          imagen: "https://acdn.mitiendanube.com/stores/865/441/products/placard-factory-modulos-logo11-d07b7488854bed23b916110763297210-640-0.webp",
          precio: "300.000"
        },
        {
          id: "",
          nombre: "MESA RATONA 1MT",
          tipo: "mesa",
          imagen: "https://acdn.mitiendanube.com/stores/865/441/products/mesa-ratona-paraiso-sanfrancisco-factory-muebles1-40ad065f0261d3613b16862765567315-640-0.webp",
          precio: "279.000"
        },
        {
          id: "",
          nombre: "SILLA DE COMEDOR TULIP X2",
          tipo: "silla",
          imagen: "https://acdn.mitiendanube.com/stores/906/026/products/tulip-x-2-b-5a86ed48700992057e17162955750666-1024-1024.webp",
          precio: "65.000"
        },

    ];
}
comprar() {
  alert('¡DEBES INICIAR SESION PARA PODER COMPRAR!');
}

}
