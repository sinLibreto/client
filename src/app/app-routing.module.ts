import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/page-404/page-404.component';
// import { AuthGuard } from './core/guards/auth.guard'; // Asegúrate de importar tu guarda aquí

const routes: Routes = [
  {path: "home",loadChildren: () =>import("./modules/home/home.module").then((m) => m.HomeModule)}, 
  {path: "auth",loadChildren: () =>import("./modules/auth/auth.module").then((m) => m.AuthModule)}, 
  {path: "auth",redirectTo:'/home',pathMatch:'full'}, 
  {path: "**",component:Page404Component}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
