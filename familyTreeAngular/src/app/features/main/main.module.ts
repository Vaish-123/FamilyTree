import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { MainRoutingModule } from "./main-routing.module";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { SharedModule } from "../../shared/shared.module";
import { PrimaryRelationsComponent } from "./components/primary-relations/primary-relations.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";

@NgModule({
  declarations: [
    HomeComponent,
    UserProfileComponent,
    PrimaryRelationsComponent,
    CreateUserComponent
  ],
  imports: [MainRoutingModule, SharedModule],
  exports: []
})

export class MainModule { }
