export class userModel{
  public email:String;
  public password:String;
  constructor(email:String,password:String) {
    this.password=password;
    this.email=email;
  }
}