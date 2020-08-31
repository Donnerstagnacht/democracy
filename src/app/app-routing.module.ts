import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { WebpageComponent } from './webpage/components/webpage/webpage.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './authentication/login/login.component';
import { AdminNewsletterComponent } from './admin/components/admin-newsletter/admin-newsletter.component';
import { AdminUnsubscribeComponent } from './admin/components/admin-unsubscribe/admin-unsubscribe.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./webpage/webpage-routing.module').then(module => module.WebpageRoutingModule)
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
