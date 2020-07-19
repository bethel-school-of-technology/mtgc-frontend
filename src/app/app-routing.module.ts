import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { MissionsProfileComponent } from './componets/missions-profile/missions-profile.component';
import { LoginComponent } from './componets/login/login.component';
/* import { signUp } from './componets/sign-up/sign-up.component'; */

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
  /* {
    path: 'sign-up',
    component: signUp
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
