import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-muebles',
  templateUrl: './card-muebles.component.html',
  styleUrls: ['./card-muebles.component.css']
})
export class CardMueblesComponent {
// Colección de todos los productos
coleccionProductos: Producto[] = [];

// Colección de sólo productos de categoría "Mesas"
coleccionMuebles: Producto[] = [];

productoSeleccionado!: Producto;

modalVisible: boolean = false;

constructor(public servicioCrud: CrudService){}

ngOnInit(): void{
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;

    // mostrar la colección actual de mesas
    this.mostrarProductoMuebles();
  })
}

// Función para filtrar los productos que sean del tipo "mesas"
mostrarProductoMuebles(){
  // forEach: itera la colección
  this.coleccionProductos.forEach(producto => {
    // Si la categoría del producto es igual a "juguetes", se enviará a la 
    // colección de juguetes específicada

    if(producto.categoria === "apartado3"){
      // .push: sube o agrega un item a una colección
      this.coleccionMuebles.push(producto);
    }
  })
}

// Muestra información completa de un producto elegido por el usuario
mostrarVer(info: Producto){
  this.modalVisible = true;

  this.productoSeleccionado = info;
}
}
