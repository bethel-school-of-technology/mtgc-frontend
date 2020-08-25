import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { MissionsProfileComponent } from './componets/missions-profile/missions-profile.component';
import { LoginComponent } from './componets/login/login.component';
import { SignUpComponent } from './componets/sign-up/sign-up.component'; 
import { AdminComponent } from './componets/admin/admin.component';
import { ConnectComponent } from './componets/connect/connect.component';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
   path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'missions-profile',
    component: MissionsProfileComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'connect', 
    component: ConnectComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'admin', 
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
