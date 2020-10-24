import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
