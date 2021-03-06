import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  ProfileComponent
} from './profile/profile.component';
import {
  NotFoundComponent
} from './not-found/not-found.component';

const routes: Routes = [{
    path: 'home',    
    loadChildren: './home/home.module#HomeModule',
    data: {
      breadcrumb: "Home"
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    
  },
  {
    path: 'profile',    
    component: ProfileComponent,
    data: {
      breadcrumb: "Profile"
    }
  },
  {
    path: 'login',    
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: {
      breadcrumb: "Dashboard"
    }
  },  
  {
    path: 'component',
    loadChildren: './material-components/material-components.module#MaterialComponentsModule',
    data: {
      breadcrumb: "Dashboard"
    }
  }, 
  {
    path: 'membership',
    loadChildren: './membership/membership.module#MembershipModule',
    data: {
      breadcrumb: "Membership  >  "
    }
      },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
