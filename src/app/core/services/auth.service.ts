import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Ruta del BackEnd

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: LoginResponse) => {
        localStorage.setItem('auth_token', res.token);
      }),
      catchError(err => {
        console.error('Login failed', err);
        return throwError(() => new Error('Credenciales incorrectas o error del servidor'));
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
  register(data: { email: string; username: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/register`, data).pipe(
      tap((res) => {
        localStorage.setItem('auth_token', res.token);
      }),
      catchError(err => {
        console.error('Registro fallido', err);
        return throwError(() => new Error('No se pudo registrar'));
      })
    );
  }  
}
