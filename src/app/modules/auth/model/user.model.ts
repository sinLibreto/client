
export class Notifications {
    messages: boolean;
    reactions: boolean;
    comments: boolean;
    follows: boolean;
  
    constructor() {
      this.messages = true;
      this.reactions = true;
      this.comments = true;
      this.follows = true;
    }
  }
  
  export class Social {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  
    constructor() {
      this.facebook = '';
      this.instagram = '';
      this.twitter = '';
      this.youtube = '';
    }
  }
  
  export class UserModel {
    // _id: string;
    authId: string;
    uId: string;
    username: string;
    email: string;
    password: string;
    avatarColor: string;
    profilePicture: string;
    blocked: string[];
    blockedBy: string[];
    work: string;
    location: string;
    school: string;
    quote: string;
    bgImageVersion: string;
    bgImageId: string;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    notifications: Notifications;
    social: Social;
  
    constructor() {
      // this._id = '';
      this.authId = '';
      this.uId = '';
      this.username = '';
      this.email = '';
      this.password = ''; 
      this.avatarColor = '';
      this.profilePicture = '';
      this.blocked = [];
      this.blockedBy = [];
      this.work = '';
      this.location = '';
      this.school = '';
      this.quote = '';
      this.bgImageVersion = '';
      this.bgImageId = '';
      this.followersCount = 0;
      this.followingCount = 0;
      this.postsCount = 0;
      this.notifications = new Notifications();
      this.social = new Social();
    }
  }
  
  export class UserResponse {
    message: string;
    remember:boolean | undefined;
    user: UserModel;
    token: string;
  
    constructor() {
      this.message = '';
      this.user = new UserModel();
      this.token = '';
    }
  }
  