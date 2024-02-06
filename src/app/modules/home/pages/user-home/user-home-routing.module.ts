import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const routes: Routes = [
  {
    path:'view-profile',
    component:ViewProfileComponent
  },
  {
    path:'edit-profile',
    component:EditProfileComponent
  },
  {
    path:'account-setting',
    component:AccountSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
