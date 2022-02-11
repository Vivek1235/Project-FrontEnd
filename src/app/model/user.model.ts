export class userModel{
  public  id:number;
  public email:String;
  public password:String;
  constructor(id:number,email:String,password:String) {
    this.password=password;
    this.email=email;
    this.id=id;
  }
}
