import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: { name: string; profileImage: string } | null = null;

  ngOnInit(): void {
    // Simulación de obtener usuario desde el AuthService
    const tokenData = localStorage.getItem('user');
    if (tokenData) {
      this.user = JSON.parse(tokenData);
    }
  }
}
