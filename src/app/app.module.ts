import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";
import {UserRegistrationService} from "./service/user-registration.service";
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SkillsAddComponent } from './skills/skills-add/skills-add.component';
import { EducationAddComponent } from './education/education-add/education-add.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ExperienceAddComponent } from './experience/experience-add/experience-add.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { ExperienceEditComponent } from './experience/experience-edit/experience-edit.component';
import { EducationEditComponent } from './education/education-edit/education-edit.component';

const appRoutes:Routes=[

  {path:'skills',component:SkillsComponent},
  {path:'skills/addSkill',component:SkillsAddComponent},


  {path:'skills/updateSkill/:id',component:SkillsEditComponent},


  {path:'profile',component:ProfileComponent},
  {path:'profile/update/:id',component:ProfileEditComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'experience/addExperience',component:ExperienceAddComponent},
  {path:'experience/updateExperience/:id',component:ExperienceEditComponent},
  {path:'education',component:EducationComponent},
  {path:'education/addEducation',component:EducationAddComponent},
  {path:'education/updateEducation/:id',component:EducationEditComponent},
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
    SkillsAddComponent,
    EducationAddComponent,
    ProfileEditComponent,
    ExperienceAddComponent,
    SkillsEditComponent,
    ExperienceEditComponent,
    EducationEditComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent],
  entryComponents:[SkillsAddComponent,ExperienceAddComponent,]
})
export class AppModule { }
