import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';



@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    AccountSettingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
