import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WebpageComponent } from './webpage/webpage.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './login/login.component';
import { AdminNewsletterComponent } from './admin-newsletter/admin-newsletter.component';
import { AdminUnsubscribeComponent } from './admin-unsubscribe/admin-unsubscribe.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path: '', component: WebpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'unsubscribe', component: AdminUnsubscribeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {
    path: 'admin/newsletter',
    component: AdminNewsletterComponent,
    canActivate: [AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
