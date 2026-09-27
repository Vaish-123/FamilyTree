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
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminModule } from './features/admin/admin.module';
import { AccountModule } from './features/account/account.module';
import { AuthIntercerptor } from './core/interceptors/auth-interceptor.service';
import { UserRelationService } from './core/services/userRelation.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CoreModule,        // Singleton services
    SharedModule,
    MainModule,
    AdminModule,
    AccountModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule.forRoot(),
  ],
  providers: [
    //TODO: Add module for services and register the module here.
    UserService,
    UserRelationService,
    provideHttpClient(withXhr(), 
      withInterceptorsFromDi() // This enables DI to load interceptors automatically
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercerptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
