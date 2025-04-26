import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage: string | null = null;
  isLoading = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, username, password } = this.registerForm.value;
  
      this.isLoading = true;
      this.successMessage = null;

      this.auth.register({ email, username, password }).subscribe({
        next: () => {
          console.log('Registro exitoso');
  
          // Mensaje de confirmación
          this.successMessage = '¡Registro exitoso! Serás redirigido al login en unos segundos...';
          this.isLoading = false;

          // Esperamos 1.5 segundos antes de redirigir
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);
        },
        error: (err) => {
          console.error('Error en registro:', err.message);
          // Mensaje de error
          this.successMessage = 'No se pudo registrar. Intenta con otros datos.';
          this.isLoading = false;
        }
      });
    }
  }
  
}
