import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailSubscriberID } from '../admin/emailSubscriber';
import { FormBuilder, Validators } from '@angular/forms';
import { GeneralFormsService } from '../shared/general-forms.service';

@Component({
  selector: 'app-admin-edit-subscriber-dialog',
  templateUrl: './admin-edit-subscriber-dialog.component.html',
  styleUrls: ['./admin-edit-subscriber-dialog.component.scss']
})
export class AdminEditSubscriberDialogComponent implements OnInit {
  editEmailForm = this.fb.group({
    editEmail: ['', [Validators.email, Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService,
    @Inject(MAT_DIALOG_DATA) public subscriber: EmailSubscriberID) { }

  ngOnInit(): void {
  }

  edit(): void {
    this.subscriber.email = this.editEmailForm.value.editEmail;
  }

  errorHandling(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.editEmailForm, control, error);
  }

}
