import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IResgisterForm } from '../interfaces/register-form.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public formSubmitted = false;

  public registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    lastname: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repassword: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    term: [false, [Validators.requiredTrue]],
    avatarImage: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0gAAAMyAQMAAABtkHM/AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAAFiS0dEAf8CLd4AAABrSURBVBgZ7cGBAAAAAMOg+1NP4AjVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjgBSwwABwrL8wAAAAABJRU5ErkJggg=='] // Inicialmente vacío
  }, { validators: this.matchPasswords });

  constructor(private fb: FormBuilder, private authService: AuthService) {}


registerUser() {
  this.formSubmitted = true;
  if (this.registerForm.invalid) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa el formulario correctamente.',
    });
    return;
  }

  const formData: IResgisterForm = {
    username: this.registerForm.get('username')!.value,
    lastname: this.registerForm.get('lastname')!.value,
    password: this.registerForm.get('password')!.value,
    email: this.registerForm.get('email')!.value,
    term: this.registerForm.get('term')!.value,
    avatarColor: 'blue', 
    avatarImage: this.registerForm.get('avatarImage')!.value 
  };

  this.authService.signup(formData).subscribe({
    next: (resp) => {
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El usuario ha sido creado con éxito.',
      });
      console.log('Usuario creado', resp);
      // Aquí puedes redireccionar al usuario o realizar otras acciones post-registro
    },
    error: (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar',
        text: 'Hubo un problema al crear el usuario, por favor intenta de nuevo.',
      });
      console.error('Error al crear usuario', err);
    }
  });
}


  notValidatedField(field: string): boolean {
    return this.formSubmitted && this.registerForm.get(field)!.invalid;
  }

  private matchPasswords(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')!.value;
    const repassword = group.get('repassword')!.value;
    return password === repassword ? null : { notMatching: true };
  }
  isTermAccepted(): boolean {
    return !this.registerForm.get('term')!.value && this.formSubmitted;
  }

}
