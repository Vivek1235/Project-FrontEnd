import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {skill} from './model/skill.model';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserRegistrationService} from "./service/user-registration.service";
import { LoginComponent } from './login/login.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LogoutComponent } from './logout/logout.component';
import { SkillsAddComponent } from './skills/skills-add/skills-add.component';
import { EducationAddComponent } from './education/education-add/education-add.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ExperienceAddComponent } from './experience/experience-add/experience-add.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';

const appRoutes:Routes=[

  {path:'skills',component:SkillsComponent},
  {path:'skills/addSkill',component:SkillsAddComponent},
  {path:'skills/updateSkill',component:SkillsEditComponent},
  {path:'profile',component:ProfileComponent},
  {path:'profile/edit',component:ProfileEditComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'experience/addExperience',component:ExperienceAddComponent},
  {path:'education',component:EducationComponent},
  {path:'education/addEducation',component:EducationAddComponent},
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
    SkillsAddComponent,
    EducationAddComponent,
    ProfileEditComponent,
    ExperienceAddComponent,
    SkillsEditComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent],
  entryComponents:[SkillsAddComponent,ExperienceAddComponent,]
})
export class AppModule { }
