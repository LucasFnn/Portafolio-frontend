import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec = new Subject<boolean>();

  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public generarToken(datosLogin: any) {
    return this.http.post(`${this.url}/generate-token`, datosLogin);
  }



  public loginUsuario(token: any) {
    localStorage.setItem('token', token);
  }



  public loginOk() {
    let token_verificado = localStorage.getItem('token');
    if (token_verificado == undefined || token_verificado == null || token_verificado == '') {
      return false;
    } else {
      return true;
    }
  }


  public deslogueo() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    return true;
  }



  public obtenerToken() {
    return localStorage.getItem('token');
  }




  public establecerUsuario(usuario: any) {
    return localStorage.setItem('usuario', JSON.stringify(usuario));
  }



  public obtenerUsuario() {
    let usuario_obt = localStorage.getItem('usuario');
    if (usuario_obt != null) {

      return JSON.parse(usuario_obt);
    } else {
      this.deslogueo();
      return null;
    }
  }



  public getUserRole(){
    let user = this.obtenerUsuario();
    return user.authorities[0].authority;
    }


    
public getCurrentUser(){

  return this.http.get(`${this.url}/actual-usuario`);
  
  }
  
}
