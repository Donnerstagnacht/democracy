import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriberService } from '../../../admin/services/subscriber.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewsletterDialogComponent } from '../newsletter-dialog/newsletter-dialog.component';
import { GeneralFormsService } from '../../../shared/services/general-forms.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  subscribeForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private subscriberService: SubscriberService,
    public matDialogRef: MatDialog,
    private generalFormsService: GeneralFormsService
    ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.subscriberService.createSubscriber({email: this.subscribeForm.value.email});
    const dialogRef: MatDialogRef<NewsletterDialogComponent> = this.matDialogRef.open(NewsletterDialogComponent);
  }

  errorHandling(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.subscribeForm, control, error);
  }

}
