import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { MainRoutingModule } from "./main-routing.module";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { SharedModule } from "../../shared/shared.module";
import { PrimaryRelationsComponent } from "./components/primary-relations/primary-relations.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { UtilsServiceComponent } from "../../shared/utils/utils.service";

@NgModule({
  declarations: [
    HomeComponent,
    UserProfileComponent,
    PrimaryRelationsComponent,
    CreateUserComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    FormsModule
  ],
  providers: [UtilsServiceComponent],
  exports: [],
})

export class MainModule { }
