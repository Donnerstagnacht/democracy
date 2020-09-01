import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSkeletonComponent } from './components/app-skeleton/app-skeleton.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';


const routes: Routes = [
  {
    path: '',
    component: AppTopBarComponent,
    outlet: 'app'
  },
  {
    path: '',
    component: AppSkeletonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSkeletonRoutingModule { }
