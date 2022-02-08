import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {skill} from './skills/skill.model';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserRegistrationService} from "./user-registration.service";
import { LoginComponent } from './login/login.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LogoutComponent } from './logout/logout.component';

const appRoutes:Routes=[

  {path:'skills',component:SkillsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'education',component:EducationComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
