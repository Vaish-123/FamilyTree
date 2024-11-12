import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AccountRoutingModule } from "./account-routing.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AccountRoutingModule
  ],
  exports: []
})

export class AccountModule { }
