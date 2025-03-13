import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {
    path:'',
    redirectTo : 'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'listado',
    component: ListadoComponent
  },
  {
    path:'nosotros',
    component: NosotrosComponent,
  },
  {
    path:'skills',
    component: SkillsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
