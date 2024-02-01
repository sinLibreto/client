import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewProfileComponent } from "./profile/view-profile/view-profile.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component";
import { AccountSettingComponent } from "./profile/account-setting/account-setting.component";
import { UserComponent } from "./user.component";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "view-profile", component: ViewProfileComponent },
      { path: "edit-profile", component: EditProfileComponent },
      { path: "setting-profile", component: AccountSettingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
