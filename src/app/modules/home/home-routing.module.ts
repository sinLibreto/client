// home-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "../auth/login/login.component";
import { LogoutComponent } from "../auth/logout/logout.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "user",
        loadChildren: () => import("../user/user.module").then((m) => m.UserModule)
      },
      {
        path: "user-profile",
        loadChildren: () => import("../user/pages/user-profile/user-profile.module").then((m) => m.UserProfileModule)
      },
      {
        path: "account-setting",
        loadChildren: () => import("../user/pages/account-setting/account-setting.module").then((m) => m.AccountSettingModule)
      },
     
      // Aquí puedes agregar más rutas hijas según sea necesario
    ]
    
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
