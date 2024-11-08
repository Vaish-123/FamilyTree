import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canMatch: [AuthGuardService]
  },
  {
    path: '', redirectTo: '/main', pathMatch: 'full' // Redirect to main on app load
  },
  {
    path: '**', redirectTo: '/main' // Redirect any unknown paths to main
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
