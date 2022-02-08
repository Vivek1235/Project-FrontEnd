import { Component, OnInit } from '@angular/core';
import {skill} from './skill.model';
import {NavbarService} from "../navbar.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "../user-registration.service";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // skills:skill[]=[new skill("HTML","https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",4),
  //   new skill("CSS","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",4.5)
  //   ,new skill("PHP","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCG3gE7tn1K0tq3NpbTXeW-AXUP-EtIzETnQ&usqp=CAU",5)
  // ];
  skills:skill[]=[];
  constructor(private nav:NavbarService,private dialog:MatDialog,private http:HttpClient,private service:UserRegistrationService ){ }

  ngOnInit(): void {
    this.nav.show();
    this.http.get<skill[]>('http://localhost:8080/skills/'+this.service.user.email).subscribe(data=>this.skills=data);

  console.log(this.skills);
  }
  addSkill()
  {
  }

}
