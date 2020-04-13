import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

import { UserDetailComponent } from '../app/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    // Lazy loaded users list
    path: 'user-list', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule) 
  },
  { 
    path: 'detail/:id', component: UserDetailComponent 
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
