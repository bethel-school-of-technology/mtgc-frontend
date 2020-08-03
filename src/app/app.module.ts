import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { HomeComponent } from './componets/home/home.component';
import { MissionsProfileComponent } from './componets/missions-profile/missions-profile.component';
import { LoginComponent } from './componets/login/login.component';
import { MapCardComponent } from './componets/map-card/map-card.component';
import { AdminComponent } from './componets/admin/admin.component';
/* import { SignUpComponent } from './componets/sign-up/sign-up.component'; */


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HomeComponent,
    MissionsProfileComponent,
    LoginComponent,
    MapCardComponent,
    AdminComponent,
   /*  SignUpComponent, */
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCWafOd1xDijhEnzrK836Bk3yaLgJbx9tk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
