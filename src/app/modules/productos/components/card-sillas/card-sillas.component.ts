import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-sillas',
  templateUrl: './card-sillas.component.html',
  styleUrls: ['./card-sillas.component.css']
})
export class CardSillasComponent {
// Colección de todos los productos
coleccionProductos: Producto[] = [];

// Colección de sólo productos de categoría "Mesas"
coleccionSillas: Producto[] = [];

productoSeleccionado!: Producto;

modalVisible: boolean = false;

constructor(public servicioCrud: CrudService){}

ngOnInit(): void{
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;

    // mostrar la colección actual de mesas
    this.mostrarProductoSillas();
  })
}

// Función para filtrar los productos que sean del tipo "mesas"
mostrarProductoSillas(){
  // forEach: itera la colección
  this.coleccionProductos.forEach(producto => {
    // Si la categoría del producto es igual a "juguetes", se enviará a la 
    // colección de juguetes específicada

    if(producto.categoria === "apartado2"){
      // .push: sube o agrega un item a una colección
      this.coleccionSillas.push(producto);
    }
  })
}

// Muestra información completa de un producto elegido por el usuario
mostrarVer(info: Producto){
  this.modalVisible = true;

  this.productoSeleccionado = info;
}
}
