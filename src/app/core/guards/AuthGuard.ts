// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
    // Aquí deberías verificar si el usuario está autenticado
    // Esto es solo un ejemplo, reemplázalo con tu lógica de autenticación
    const isAuthenticated = this.checkAuthentication();

    if (!isAuthenticated) {
      // Si no está autenticado, redirige al login o registro
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

  private checkAuthentication(): boolean {
    // Simula la verificación de autenticación
    // Deberías reemplazar esto con tu lógica de autenticación real
    // Por ejemplo, verificar si existe un token de sesión en localStorage
    return localStorage.getItem('userToken') ? true : false;
  }
}
