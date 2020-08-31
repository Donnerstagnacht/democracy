import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './components/webpage/webpage.component';


const routes: Routes = [
  {
    path: '',
    component: WebpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebpageRoutingModule { }
