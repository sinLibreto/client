import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileModule } from './profile/profile.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProfileModule,
    RouterModule

  ]
})
export class UserModule { }
