import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { UsersComponent } from "./components/users/users.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: []
})

export class AdminModule { }
