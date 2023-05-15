import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { LoginService } from './servicios/login.service';
import { authInterceptorProviders } from './servicios/auth.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HabilidadesComponent } from './admin/habilidades/habilidades.component';
import { EstudiosComponent } from './admin/estudios/estudios.component';
import { FormulariosComponent } from './admin/formularios/formularios.component';
import { PerfilComponent } from './admin/perfil/perfil.component';
import { ContenidoGeneralComponent } from './admin/contenido-general/contenido-general.component';
import { ProyectosedicionComponent } from './admin/proyectosedicion/proyectosedicion.component';
import { AddhabilidadComponent } from './admin/addhabilidad/addhabilidad.component';
import { EditarhabilidadComponent } from './admin/editarhabilidad/editarhabilidad.component';
import { AddproyectoComponent } from './admin/addproyecto/addproyecto.component';
import { EditarproyectoComponent } from './admin/editarproyecto/editarproyecto.component';
import { AddestudioComponent } from './admin/addestudio/addestudio.component';
import { EditarestudioComponent } from './admin/editarestudio/editarestudio.component';
import { EditarredComponent } from './admin/editarred/editarred.component';
import { AddredComponent } from './admin/addred/addred.component';
import { EditarperfilComponent } from './admin/editarperfil/editarperfil.component';
import { EditarContGralComponent } from './admin/editar-cont-gral/editar-cont-gral.component';
import { AddContGralComponent } from './admin/add-cont-gral/add-cont-gral.component';
import { EditarUsuarioComponent } from './admin/editar-usuario/editar-usuario.component';
import { EstudiosverComponent } from './estudiosver/estudiosver.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ProyectosComponent,
    SobremiComponent,
    HomeComponent,
    LoginComponent,
    TecnologiasComponent,
    DashboardComponent,
    HabilidadesComponent,
    EstudiosComponent,
    FormulariosComponent,
    PerfilComponent,
    ContenidoGeneralComponent,
    ProyectosedicionComponent,
    AddhabilidadComponent,
    EditarhabilidadComponent,
    AddproyectoComponent,
    EditarproyectoComponent,
    AddestudioComponent,
    EditarestudioComponent,
    EditarredComponent,
    AddredComponent,
    EditarperfilComponent,
    EditarContGralComponent,
    AddContGralComponent,
    EditarUsuarioComponent,
    EstudiosverComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
