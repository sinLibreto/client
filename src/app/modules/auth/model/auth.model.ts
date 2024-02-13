
export class AuthModel {
  username: string;
  password: string;
  email: string;
  avatarColor: string;
  // _id: string;
  // authId: string;
  // uId: string;
  avatarImage?: string;


  constructor(
    username: string = "",
    password: string = "",
    email: string = "",
    avatarColor: string = "",
    avatarImage?: string 
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.avatarColor = avatarColor;
    this.avatarImage = avatarImage;
    // this._id = '';
    // this.authId = '';
    // this.uId = '';
  }
}
