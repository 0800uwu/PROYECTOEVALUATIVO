import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';

// Son las encargadas de tener todas las rutas de la página
const routes: Routes = [
  // Ruta común -> 1 solo componente
  {
    path:"",component:InicioComponent
  },
  // Carga perezosa -> 1 módulo
  // loadChildren: indica una ruta hija
  // ()=>import: ruta de dónde viene el módulo
  // .then: promesa/ función asincronica
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductoModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),
    // Especificamos que la ruta de administrador va a ser protegida con un guardián
    // Y espera un rol de tipo "admin"
    canActivate: [ rutaProtegidaGuard ], data: { role: 'admin' }
  },
  {
    path:"",loadChildren:()=>import('./modules/nosotros/nosotros.module').then(m=>m.NosotrosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
