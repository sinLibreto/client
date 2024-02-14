import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { AuthModel } from "../model/auth.model";
import { UserResponse } from "../model/user.model";
import { environment } from "src/environments/environment";
import { IResgisterForm } from "../interfaces/register-form.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private base_url = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) {}



  signup(data: IResgisterForm): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(`${this.base_url}/signup`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((resp) => {
          this.guardarLocalStorage(resp.token);
        })
      );
  }

  login(data: {
    username: string;
    password: string;
  }): Observable<UserResponse> {
    return this.http
      .post<UserResponse>(`${this.base_url}/signin`, data, {
        withCredentials: true,
      })
      .pipe(
        tap((resp) => {
          console.log(resp.token);
          this.guardarLocalStorage(resp.token);
        })
      );
  }
  validarToken(): Observable<boolean> {
    if (!this.getToken()) {
      return of(false);
    }

    return this.http
      .get(`${this.base_url}/currentuser`, { withCredentials: true })
      .pipe(
        map((response) => {
          return true;
        }),
        catchError((error) => {
          console.error(
            "Error validando el token mediante /currentuser",
            error
          );
          this.logout();
          return of(false);
        })
      );
  }

  guardarLocalStorage(token: string): void {
    localStorage.setItem("token", token);
  }
  tokenExiste(): boolean {
    return !!localStorage.getItem("token");
  }
  // Obtener el token del localStorage
  getToken(): string {
    return localStorage.getItem("token") || "";
  }

  logout(): void {
    // Realiza la petición al endpoint /signout del servidor
    this.http.get(`${this.base_url}/signout`, { withCredentials: true })
      .pipe(
        tap(() => {
          localStorage.removeItem('token'); // Limpia el token del localStorage
          this.router.navigateByUrl('/login'); // Redirige al usuario a la página de inicio de sesión
        })
      )
      .subscribe({
        next: (resp) => {
          console.log('Logout successful', resp);
        },
        error: (error) => {
          console.error('Error during logout', error);
        }
      });
  }
}
