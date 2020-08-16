import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { MissionsProfileComponent } from './componets/missions-profile/missions-profile.component';
import { LoginComponent } from './componets/login/login.component';
import { AboutComponent } from './componets/about/about.component';
import { SignUpComponent } from './componets/sign-up/sign-up.component'; 
import { AdminComponent } from './componets/admin/admin.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    
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
    path: 'about',
    component: AboutComponent
  },
  {
    path:'login',
    component: LoginComponent
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
