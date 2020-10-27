import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/authentication/auth.service';
import { Comment } from 'src/app/shared/models/comment';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Output() comment = new EventEmitter<Comment>();
  createCommentForm = this.fb.group({
    comment: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  createComment(): void {
    this.authService.getUserId().subscribe(uid => {
      const commentData: Comment = {
        uid,
        message: this.createCommentForm.value.comment,
      };
      this.comment.emit(commentData);
    });
  }

  errorHandling(form: FormGroup, control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(form, control, error);
  }

}
