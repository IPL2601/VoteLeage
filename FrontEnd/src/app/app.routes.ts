import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(c => c.HomeComponent),
    //canActivate: [AuthGuard] // Comprueba si esta logueado
  },
  {
    path: 'leagues',
    loadComponent: () =>
      import('./features/leagues/leagues.component').then(c => c.LeaguesComponent),
    canActivate: [AuthGuard] // Comprueba si esta logueado
  },
  {
    path: 'league/:id',
    loadComponent: () => import('./features/league-preview/league-preview.component').then(c => c.LeaguePreviewComponent),
    //canActivate: [AuthGuard]
  },
  {
    path: 'league/:id/edit',
    loadComponent: () =>
      import('./features/league-edit/league-edit.component').then(m => m.LeagueEditComponent),
    //canActivate: [AuthGuard]
  }
  

  
  ];
  