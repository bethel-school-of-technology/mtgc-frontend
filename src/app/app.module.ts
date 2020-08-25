import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { PostdataService } from './services/postdata.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { HomeComponent } from './componets/home/home.component';
import { MissionsProfileComponent } from './componets/missions-profile/missions-profile.component';
import { LoginComponent } from './componets/login/login.component';
import { MapCardComponent } from './componets/map-card/map-card.component';
import { AdminComponent } from './componets/admin/admin.component';
import { SignUpComponent } from './componets/sign-up/sign-up.component'; 
//Material import
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { Observable } from 'rxjs';
import { AuthInterceptor } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HomeComponent,
    MissionsProfileComponent,
    LoginComponent,
    MapCardComponent,
    SignUpComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCWafOd1xDijhEnzrK836Bk3yaLgJbx9tk'
    })
  ],
  providers: [ 
   
    PostdataService,
    AuthInterceptor
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
