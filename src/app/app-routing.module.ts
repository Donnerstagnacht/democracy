import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { WebpageComponent } from './webpage/components/webpage/webpage.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './authentication/login/login.component';
import { AdminNewsletterComponent } from './admin/components/admin-newsletter/admin-newsletter.component';
import { AdminUnsubscribeComponent } from './admin/components/admin-unsubscribe/admin-unsubscribe.component';
import { PasswordResetComponent } from './authentication/password-reset/password-reset.component';
import { NoAdminPermissionComponent } from './authentication/no-admin-permission/no-admin-permission.component';

const routes: Routes = [
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
