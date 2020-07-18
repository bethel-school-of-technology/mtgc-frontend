import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { HomeComponent } from './componets/home/home.component';
import { MissionsProfileComponent } from './componets/missions-profile/missions-profile.component';
/* import { SignUpComponent } from './componets/sign-up/sign-up.component'; */
/* import { LoginComponent } from './login/login.component'; */

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HomeComponent,
    MissionsProfileComponent,
   /*  SignUpComponent, */
   /*  LoginComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
