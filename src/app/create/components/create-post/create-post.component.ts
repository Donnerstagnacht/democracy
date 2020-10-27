import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/authentication/auth.service';
import { CreatePost } from 'src/app/shared/models/createPost';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';
import { CreatePostService } from '../../services/create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postImageUrl: string;

  createPostForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService,
    private createPostService: CreatePostService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  handleImageUpload(url: string) {
    console.log('new url');
    this.postImageUrl = url;
  }

  createPost(): void {
    // create a batch and update Post ticker
    this.authService.getUserId().subscribe(uid => {
      const postData: CreatePost = {
        title: this.createPostForm.value.title,
        text: this.createPostForm.value.text,
        postImageUrl: this.postImageUrl,
        author: uid,
        commentsTotal: 0,
        likesTotal: 0
      };
      this.createPostService.createPost(postData);
    });
  }

  errorHandling(form: FormGroup, control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(form, control, error);
  }

}
