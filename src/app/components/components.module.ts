import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FriendComponent } from './friend/friend.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageComponent } from './message/message.component';
import { NotificationsAllComponent } from './notifications-all/notifications-all.component';
import { MessagesAllComponent } from './messages-all/messages-all.component';
import { HelpComponent } from './help/help.component';
import { UserConnectComponent } from './user-connect/user-connect.component';



@NgModule({
  declarations: [
    SearchComponent,
    FriendComponent,
    NotificationsComponent,
    MessageComponent,
    NotificationsAllComponent,
    MessagesAllComponent,
    HelpComponent,
    UserConnectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchComponent,
    FriendComponent,
    NotificationsComponent,
    MessageComponent,
    NotificationsAllComponent,
    MessagesAllComponent,
    HelpComponent,
    UserConnectComponent

  ]
})
export class ComponentsModule { }
