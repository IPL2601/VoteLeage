import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-league-preview',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './league-preview.component.html',
  styleUrls: ['./league-preview.component.scss'],
})
export class LeaguePreviewComponent {
  leagueName = 'FMS Internacional';

  displayedColumns: string[] = [
    'profile',
    'name',
    'battlePoints',
    'totalPoints',
    'battles',
  ];
  //Datos de prueba
  participants = [
    {
      name: 'Chuty',
      profileImage: 'assets/images/profiles/Chuty.png',
      battlePoints: 95,
      totalPoints: 6,
      battles: 3,
    },
    {
      name: 'Skone',
      profileImage: 'assets/images/profiles/Skone.jpg',
      battlePoints: 90,
      totalPoints: 0,
      battles: 3,
    },
    {
      name: 'Gazir',
      profileImage: 'assets/images/profiles/Gazir.webp',
      battlePoints: 93,
      totalPoints: 3,
      battles: 3,
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  editLeague() {
    const leagueId = this.route.snapshot.paramMap.get('id');
    if (leagueId) {
      this.router.navigate(['/league', leagueId, 'edit']);
    }
  }
  copied = false;
  accessCode = 'LIGA-12345'; // Este valor debería venir del backend

  copyAccessCode() {
    navigator.clipboard.writeText(this.accessCode).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }
}
