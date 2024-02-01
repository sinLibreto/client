// home-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HelpComponent } from './pages/help/help.component';

// Importa otros componentes según sea necesario

const routes: Routes = [
  {
    path: '', component: HomeComponent, 
    children: [
      { path: '', component: HomePageComponent },
      { path: 'help', component: HelpComponent },

      // Define otras rutas secundarias según sea necesario
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
