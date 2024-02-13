import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Usar username en lugar de email
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido, no hacer nada
    }
    
    // Crea un objeto con las credenciales del formulario
    const credentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    // Llama al método de login del servicio de autenticación
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response.user);
        this.router.navigateByUrl('/home'); // Redirige al usuario a la página de inicio después del login
      },
      error: (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }
}
