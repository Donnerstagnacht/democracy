import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { ProfilePostComponent } from './components/profile-post/profile-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostComponent,
    ProfilePostComponent,
    CommentsComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    PostComponent,
    ProfilePostComponent
  ]
})
export class PostModule { }
