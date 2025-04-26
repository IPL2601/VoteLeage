import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  trendingLeagues = [
    { name: 'Red Bull Batalla', followers: 12450, id: 1 },
    { name: 'FMS España', followers: 9730, id: 1},
    { name: 'Ultimate League', followers: 8510, id: 1},
    { name: 'Ultimate League', followers: 8510, id: 1},
    { name: 'Ultimate League', followers: 8510, id: 1},
    { name: 'Ultimate League', followers: 8510, id: 1},
    { name: 'Ultimate League', followers: 8510, id: 1},
    { name: 'Ultimate League', followers: 8510, id: 1},
    { name: 'Ultimate League', followers: 8510, id: 1},
  ];

  myLeagues = [
    { name: 'Mi Liga Personal', role: 'participante' },
    { name: 'Liga del Barrio', role: 'participante' },
  ];

  createdLeagues = [
    { name: 'Liga VoteLeague', role: 'creador' },
    { name: 'Batalla Norte', role: 'creador' },
  ];

  scrollLeft(containerId: string) {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: -250, behavior: 'smooth' });
    }
  }
  
  scrollRight(containerId: string) {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 250, behavior: 'smooth' });
    }
  }
  

}

