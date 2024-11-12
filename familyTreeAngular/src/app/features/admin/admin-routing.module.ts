import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: '**', redirectTo: 'main/home' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
