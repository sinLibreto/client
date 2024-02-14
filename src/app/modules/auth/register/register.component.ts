import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IResgisterForm } from '../interfaces/register-form.interface';

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
      return;
    }

    const formData: IResgisterForm = {
      username: this.registerForm.get('username')!.value,
      lastname: this.registerForm.get('lastname')!.value,
      password: this.registerForm.get('password')!.value,
      email: this.registerForm.get('email')!.value,
      term: this.registerForm.get('term')!.value,
      avatarColor: 'blue', // Asumir un valor por defecto o extraerlo del formulario si es necesario
      avatarImage: this.registerForm.get('avatarImage')!.value // Asegúrate de manejar este campo correctamente
    };

    this.authService.signup(formData).subscribe({
      next: (resp) => console.log('Usuario creado', resp),
      error: (err) => console.error('Error al crear usuario', err)
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
