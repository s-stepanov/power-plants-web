import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthenticationModule,
    AppRoutingModule,
    AdminModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [ErrorInterceptor, JwtInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
