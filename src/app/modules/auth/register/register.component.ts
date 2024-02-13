import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Asegúrate de que la ruta sea correcta
import { AuthModel } from '../model/auth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  // Definición del FormGroup
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService // Inyecta el AuthService
  ) {
    // Inicializa el formulario
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      avatarColor: ['black', Validators.required],
      avatarImage: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0gAAAMyAQMAAABtkHM/AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAAFiS0dEAf8CLd4AAABrSURBVBgZ7cGBAAAAAMOg+1NP4AjVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjgBSwwABwrL8wAAAAABJRU5ErkJggg=='] // Opcional, depende de si quieres permitir que se especifique una imagen al registrar
    });
  }

  ngOnInit(): void {
  }
  verificarTokenGuardado(): void {
    if (this.authService.tokenExiste()) {
      console.log('El token se ha guardado correctamente en el localStorage.');
    } else {
      console.log('El token no se ha guardado en el localStorage.');
    }
  }

  // Método para manejar el envío del formulario
  onRegister(): void {
    if (this.registerForm.invalid) {
      console.error('Formulario no válido');
      return;
    }

    // Crea un modelo AuthModel con los datos del formulario
    const authData = new AuthModel(
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.email,
      this.registerForm.value.avatarColor,
      this.registerForm.value.avatarImage
    );
    // Utiliza el AuthService para registrar el usuario
    this.authService.signup(authData).subscribe({
      next: (response) => {
        // console.log('Usuario registrado exitosamente:', response.token);
        this.verificarTokenGuardado(); // Verificar si el token se guardó
      },
      error: (error) => {
        console.error('Error al registrar el usuario:', error);
      }
    });
    
  }
  
}
