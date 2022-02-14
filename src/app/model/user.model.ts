export class userModel{
  public  id:number;
  public email:string;
  public password:string;
  constructor(id:number,email:string,password:string) {
    this.password=password;
    this.email=email;
    this.id=id;
  }
}
