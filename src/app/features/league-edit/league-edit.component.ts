import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-league-edit',
  templateUrl: './league-edit.component.html',
  styleUrls: ['./league-edit.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LeagueEditComponent implements OnInit {
  leagueForm!: FormGroup;
  leagueId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.leagueId = this.route.snapshot.paramMap.get('id');

    // Puedes cargar datos desde el backend aquí con this.leagueId

    this.leagueForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.maxLength(500)]]
    });

    // Simulamos datos para test
    this.leagueForm.patchValue({
      name: 'FMS Internacional',
      description: 'La liga más intensa con los mejores freestylers del mundo.'
    });
  }

  onSubmit(): void {
    if (this.leagueForm.valid) {
      console.log('Datos enviados:', this.leagueForm.value);
      // Aquí llamarías a tu LeagueService para actualizar en el backend

      this.router.navigate(['/league', this.leagueId]);
    }
  }

  cancel(): void {
    this.router.navigate(['/league', this.leagueId]);
  }
}
