import {Component, OnInit, ViewChild} from '@angular/core';
import {userModel} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "./user-registration.service";
import {skill} from "./skills/skill.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //@ViewChild('inputEmail') inputEmail:any;
  //@ViewChild('inputPassword') inputPassword:any;
  allowAccess:boolean =false;
  title = 'project-app';

  user:userModel=new userModel("","");
  message:any;
  constructor(private service:UserRegistrationService,private router:Router) {
  }
  ngOnInit() {
     this.router.navigate(['login']);
  }

  /* validateUser()
   {

     if(this.inputEmail.nativeElement.value=="vivek@gmail.com" && this.inputPassword.nativeElement.value=="1234")
       this.allowAccess=true;
     else
       this.allowAccess=false;


   }*/
  // doRegister()
  // {
  //   let response=this.service.doRegistration(this.user);
  //   response.subscribe((data)=>this.message=data);
  // }
}
