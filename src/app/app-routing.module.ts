import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from './admin.guard';
import { EstudiosComponent } from './admin/estudios/estudios.component';
import { FormulariosComponent } from './admin/formularios/formularios.component';
import { PerfilComponent } from './admin/perfil/perfil.component';
import { HabilidadesComponent } from './admin/habilidades/habilidades.component';
import { ContenidoGeneralComponent } from './admin/contenido-general/contenido-general.component';
import { ProyectosedicionComponent } from './admin/proyectosedicion/proyectosedicion.component';
import { AddhabilidadComponent } from './admin/addhabilidad/addhabilidad.component';
import { EditarhabilidadComponent } from './admin/editarhabilidad/editarhabilidad.component';
import { AddproyectoComponent } from './admin/addproyecto/addproyecto.component';
import { EditarproyectoComponent } from './admin/editarproyecto/editarproyecto.component';
import { AddestudioComponent } from './admin/addestudio/addestudio.component';
import { EditarestudioComponent } from './admin/editarestudio/editarestudio.component';
import { EditarperfilComponent } from './admin/editarperfil/editarperfil.component';
import { AddredComponent } from './admin/addred/addred.component';
import { EditarredComponent } from './admin/editarred/editarred.component';
import { EditarContGralComponent } from './admin/editar-cont-gral/editar-cont-gral.component';
import { AddContGralComponent } from './admin/add-cont-gral/add-cont-gral.component';
import { EditarUsuarioComponent } from './admin/editar-usuario/editar-usuario.component';
import { EstudiosverComponent } from './estudiosver/estudiosver.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'estudios',
    component: EstudiosComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'proyectos_',
    component: ProyectosedicionComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'formularios',
    component: FormulariosComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'general',
    component: ContenidoGeneralComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },{
    path: 'addhabilidad',
    component: AddhabilidadComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'editarhabilidad/:id',
    component: EditarhabilidadComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'addproyecto',
    component: AddproyectoComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'editarproyecto/:id',
    component: EditarproyectoComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'addestudio',
    component:AddestudioComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'editarestudio/:id',
    component: EditarestudioComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'editarperfil',
    component: EditarperfilComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'addred',
    component: AddredComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'editarred/:id',
    component: EditarredComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'editartexto/:id',
    component: EditarContGralComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'addtexto',
    component: AddContGralComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'editarusuario/:id',
    component: EditarUsuarioComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  { path: '', component: HomeComponent },
  {path: '',
  children: [
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'estudios_', component: EstudiosverComponent },
  { path: 'home', component: HomeComponent }]},
  { path: '**', component: HomeComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
