import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/page-404/page-404.component';
import { LogoutComponent } from './modules/auth/logout/logout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', 
  canActivate:[AuthGuard],
  loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  // { path: 'logout', loadChildren: () => import('./modules/logout/logout.module').then((m) => m.LogoutModule) },
  // ... tus otras rutas
  {
    path: "logout", component:LogoutComponent
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
