import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './authentication/login/login.component';
import { PasswordResetComponent } from './authentication/password-reset/password-reset.component';
import { NoAdminPermissionComponent } from './authentication/no-admin-permission/no-admin-permission.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./timeline/timeline.module').then(module => module.TimelineModule)
  },
  {
    path: 'home',
    // component: WebpageComponent
    loadChildren: () => import('./webpage/webpage.module').then(module => module.WebpageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(module => module.CreateModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  },
  {
    path: 'no-admin-permission',
    component: NoAdminPermissionComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(module => module.SearchModule)
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
export class AppRoutingModule { }
