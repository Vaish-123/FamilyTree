import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { CreateOrEditUserComponent } from "./components/create-user/create-or-edit-user.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'createuser', component: CreateOrEditUserComponent },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
