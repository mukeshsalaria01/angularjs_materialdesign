import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'profile', component: ProfileComponent},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterModule'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  {path: 'membership', loadChildren: './membership/membership.module#MembershipModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
