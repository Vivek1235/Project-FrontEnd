export class DbUserModel {
  public userId:any;
  public email:String;
  public password:String;
  constructor(email:String,password:String) {
    this.password=password;
    this.email=email;
  }
}
