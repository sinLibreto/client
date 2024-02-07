import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarRigthComponent } from './sidebar-rigth/sidebar-rigth.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { Page404Component } from './page-404/page-404.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarRigthComponent,
    SidebarLeftComponent,
    FooterHomeComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
   
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarRigthComponent,
    SidebarLeftComponent,
    FooterHomeComponent
  ]
})
export class SharedModule { }
