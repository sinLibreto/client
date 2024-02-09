import { Component } from '@angular/core';
import { AuthModel } from '../model/auth.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser: AuthModel = new AuthModel();

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.newUser).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      },
      error: (error) => {
        console.error('Error en el registro', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      }
    });
  }
}
