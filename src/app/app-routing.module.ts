import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectComponent } from './components/proyects/edit-proyect.component';
import { NewProyectComponent } from './components/proyects/new-proyect.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path :'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'newskills', component: NewSkillsComponent},
  {path: 'editskills/:id', component: EditSkillsComponent},
  {path: 'editaboutme/:id', component: EditAboutmeComponent},
  {path: 'newproyect', component: NewProyectComponent},
  {path: 'editproyect/:id', component: EditProyectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
