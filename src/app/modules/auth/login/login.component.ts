import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'; // Importa SweetAlert2

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
      username: [ localStorage.getItem('username') || '', [Validators.required]], 
      password: ['', [Validators.required]],
      rememberme: [false]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
      });
      return; // Si el formulario es inválido, muestra una alerta y no hace nada más
    }
    
    const credentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.authService.login(credentials).subscribe({
     
      next: (response) => {
        if (this.loginForm.get('rememberme')?.value){
          localStorage.setItem('username',this.loginForm.get('username')?.value)
        } else{
          localStorage.removeItem('username')

        }
        console.log('Inicio de sesión exitoso:', response);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigateByUrl('/home'); // Redirige al usuario a la página de inicio después del login
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en el inicio de sesión',
          text: 'Usuario o contraseña incorrectos',
        });
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }
}
