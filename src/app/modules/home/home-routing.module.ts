// home-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

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
        loadChildren: () => import("../user-profile/user-profile.module").then((m) => m.UserProfileModule)
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
