import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from '../webpage/components/webpage/webpage.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUnsubscribeComponent } from './components/admin-unsubscribe/admin-unsubscribe.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AdminGuard } from '../authentication/admin.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AngularFireAuthGuard, AdminGuard],
     data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'unsubscribe',
    component: AdminUnsubscribeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
