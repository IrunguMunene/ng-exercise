import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../app/core/services/user.service';
import { LoginService } from '../app/core/services/login.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent, UserDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule],
  providers: [UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
