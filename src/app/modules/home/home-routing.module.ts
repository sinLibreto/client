import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {
        path:'friend',
        loadChildren:()=>import('./pages/friend/friend.module').then(m=>m.FriendModule)
      },
      {
        path:'notification',
        loadChildren:()=>import('./pages/notifications/notifications.module').then(m=>m.NotificationsModule)
      },
      {
        path:'messages',
        loadChildren:()=>import('./pages/message/message.module').then(m=>m.MessageModule)
      },
      {
        path:'help',
        loadChildren:()=>import('./pages/help/help.module').then(m=>m.HelpModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
