import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MainModule } from './features/main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './core/services/user.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminModule } from './features/admin/admin.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,  // Global routing
    BrowserAnimationsModule,
    // CoreModule,        // Singleton services
    SharedModule,       // Reusable components, pipes, directives
    MainModule,
    AdminModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule.forRoot(),
  ],
  providers: [
    UserService,
    provideHttpClient(
      withInterceptorsFromDi() // This enables DI to load interceptors automatically
    )
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
