import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  createPostForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService
    ) { }

  ngOnInit(): void {
  }

  createPost(): void {}

  errorHandling(form: FormGroup, control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(form, control, error);
  }

}
