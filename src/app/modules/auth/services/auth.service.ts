import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthModel } from '../model/auth.model';
import { UserResponse } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { IResgisterForm } from '../interfaces/register-form.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url = environment.apiBaseUrl; 

  constructor(private http: HttpClient, private router: Router) {}


 
  signup(data: IResgisterForm): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.base_url}/signup`, data, { withCredentials: true }).pipe(
      tap((resp) => {
        this.guardarLocalStorage(resp.token); 
      })
    );
  }



  // Método para iniciar sesión
 // AuthService

login(data: { username: string; password: string; }): Observable<UserResponse> {
  return this.http.post<UserResponse>(`${this.base_url}/signin`, data, { withCredentials: true }).pipe(
    tap((resp) => {
      console.log(resp.token)
      this.guardarLocalStorage(resp.token); 
    })
  );
}


  // Guardar token y menú en localStorage
  guardarLocalStorage(token: string): void {
    localStorage.setItem('token', token);
  }
  tokenExiste(): boolean {
    return !!localStorage.getItem('token');
  }
  // Obtener el token del localStorage
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
