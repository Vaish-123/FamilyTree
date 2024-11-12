import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { AdminGuardService } from './core/guards/admin-guard.service';
import { LoginGuardService } from './core/guards/login-guard.service';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
    canActivate: [LoginGuardService]
  },
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canMatch: [AdminGuardService],
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/account/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
