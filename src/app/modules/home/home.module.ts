import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ComponentsModule,
    UserModule
    
 
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
