import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavbarService} from "../service/navbar.service";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "../service/user-registration.service";
import {userModel} from "../model/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedLink = new EventEmitter<string>();

  constructor(public nav: NavbarService, private http: HttpClient,private service:UserRegistrationService) {
  }

  ngOnInit(): void {

  }

  clickedLink(link: string) {
    this.selectedLink.emit(link);
  }
  deleteUser()
  {
    this.service.user=new userModel(0,"","");
  }
}
