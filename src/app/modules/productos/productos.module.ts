import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './productos-routing.module';

//VISTAS
import { ProductoComponent } from './pages/producto/producto.component';
import { Apartado1Component } from './pages/apartado1/apartado1.component';
import { Apartado2Component } from './pages/apartado2/apartado2.component';
import { Apartado3Component } from './pages/apartado3/apartado3.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
import { CardMueblesComponent } from './components/card-muebles/card-muebles.component';
import { CardSillasComponent } from './components/card-sillas/card-sillas.component';
import { CardMesasComponent } from './components/card-mesas/card-mesas.component';

@NgModule({
  declarations: [
    Apartado1Component,
    Apartado2Component,
    Apartado3Component,
    ProductoComponent,
    CardComponent,
    CardMueblesComponent,
    CardSillasComponent,
    CardMesasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
  ],
  exports:[
    ProductoComponent,
    Apartado1Component,
    Apartado2Component,
    Apartado3Component,
    CardComponent,
    CardMueblesComponent,
    CardSillasComponent,
    CardMesasComponent
  ]
})
export class ProductoModule { }
