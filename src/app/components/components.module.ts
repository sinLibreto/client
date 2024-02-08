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
import { RouterModule } from '@angular/router';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import { StoriesComponent } from './stories/stories.component';
import { ReeliesComponent } from './reelies/reelies.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { FriendsInvitedSliderComponent } from './friends-invited-slider/friends-invited-slider.component';
import { SuggestedFriendsSliderComponent } from './suggested-friends-slider/suggested-friends-slider.component';
import { PostReeliestComponent } from './post-reeliest/post-reeliest.component';



@NgModule({
  declarations: [
    SearchComponent,
    FriendComponent,
    NotificationsComponent,
    MessageComponent,
    NotificationsAllComponent,
    MessagesAllComponent,
    HelpComponent,
    UserConnectComponent,
    AddFriendComponent,
    SidebarHomeComponent,
    StoriesComponent,
    ReeliesComponent,
    TopStoriesComponent,
    FriendsInvitedSliderComponent,
    SuggestedFriendsSliderComponent,
    PostReeliestComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ReeliesComponent,
    TopStoriesComponent,
    SearchComponent,
    FriendComponent,
    NotificationsComponent,
    MessageComponent,
    NotificationsAllComponent,
    MessagesAllComponent,
    HelpComponent,
    UserConnectComponent,
    AddFriendComponent,
    SidebarHomeComponent,
    StoriesComponent,
    FriendsInvitedSliderComponent,
    SuggestedFriendsSliderComponent,
    PostReeliestComponent,

  ]
})
export class ComponentsModule { }
