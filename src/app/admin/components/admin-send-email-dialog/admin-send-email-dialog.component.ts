import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmailReply } from '../../models/emailReply';
import { GeneralFormsService } from '../../../shared/services/general-forms.service';

@Component({
  selector: 'app-admin-send-email-dialog',
  templateUrl: './admin-send-email-dialog.component.html',
  styleUrls: ['./admin-send-email-dialog.component.scss']
})
export class AdminSendEmailDialogComponent implements OnInit {
  emailReplyForm = this.fb.group({
    subject: ['', Validators.required],
    text: ['', Validators.required]
  });

  clickResult: boolean;

  constructor(
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService,
    @Inject(MAT_DIALOG_DATA) public sendEmailData: EmailReply,
    public dialogRef: MatDialogRef<AdminSendEmailDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  sendEmail(): void {
    document.getElementsByClassName('animate__animated')[0].classList.remove('animate__slideInLeft');
    document.getElementsByClassName('animate__animated')[0].classList.add('animate__slideOutRight');

    const sendEmailDialogData: EmailReply = {
      id: this.sendEmailData.id,
      email: this.sendEmailData.email,
      subject: this.emailReplyForm.value.subject,
      text: this.emailReplyForm.value.text
    };

    const animated = document.querySelector('.animate__slideOutRight');
    animated.addEventListener('animationend', () => {
      this.dialogRef.close(sendEmailDialogData);
    });
  }

  noEmail(): void {
    document.getElementsByClassName('animate__animated')[0].classList.remove('animate__slideInLeft');
    document.getElementsByClassName('animate__animated')[0].classList.add('animate__slideOutRight');
    const animated = document.querySelector('.animate__slideOutRight');
    animated.addEventListener('animationend', () => {
      this.dialogRef.close();
    });
  }

  errorHandling(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.emailReplyForm, control, error);
  }


}
