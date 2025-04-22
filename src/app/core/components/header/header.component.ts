import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [  
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user?: { name: string, profileImage: string } | null = null;
  
  constructor(private router: Router) {}

  goToProfile() {
    //this.router.navigate(['/profile']);
  }

  editProfile() {
    //this.router.navigate(['/profile/edit']);
  }

  goToMyLeagues() {
    //this.router.navigate(['/my-leagues']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    // Simulación de carga asincrónica
    setTimeout(() => {
      this.user = {
        name: 'Mazztermind',
        profileImage: 'assets/Diseño4.webp'
      };
    }, 1000);
  }

}
