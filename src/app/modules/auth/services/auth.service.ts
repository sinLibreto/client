import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthModel } from '../model/auth.model';
import { UserResponse } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url = 'http://localhost:5000/api/v1'; 

  constructor(private http: HttpClient, private router: Router) {}


  // Método para registrar un nuevo usuario
  signup(data: AuthModel): Observable<UserResponse> {
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
      this.guardarLocalStorage(resp.token); // Guarda el token en el localStorage
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
