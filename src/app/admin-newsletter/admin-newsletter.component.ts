import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Newsletter } from './newsletter';
import { GeneralFormsService } from '../shared/general-forms.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminNewsletterDialogComponent } from '../admin-newsletter-dialog/admin-newsletter-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-newsletter',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./admin-newsletter.component.scss']
})
export class AdminNewsletterComponent implements OnInit {
  @Output() newsletterEvent = new EventEmitter<Newsletter>();
  newsletterForm = this.fb.group({
    subject: ['', Validators.required],
    title1: ['', Validators.required],
    text1: ['', Validators.required],
    title2: ['', Validators.required],
    text2: ['', Validators.required],
    title3: ['', Validators.required],
    text3: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService,
    public matDialogRef: MatDialog,
    private matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  sendNewsletter(): void {
    const newsLetter: Newsletter = {
      subject: this.newsletterForm.value.subject,
      title1: this.newsletterForm.value.title1,
      text1: this.newsletterForm.value.text1,
      title2: this.newsletterForm.value.title2,
      text2: this.newsletterForm.value.text2,
      title3: this.newsletterForm.value.title3,
      text3: this.newsletterForm.value.text3,
    };
    const dialogRef: MatDialogRef<AdminNewsletterDialogComponent> = this.matDialogRef.open(AdminNewsletterDialogComponent, {
      data: newsLetter
    });
    dialogRef.afterClosed().subscribe((newsLetterConfirmed: Newsletter) => {

    if (newsLetterConfirmed) {
    this.newsletterEvent.emit(newsLetterConfirmed);
    this.openSnackbar();
    }

    });
  }

  errorHandling(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.newsletterForm, control, error);
  }

  openSnackbar() {
    this.matSnackBar.open('Newsletter Versendet!', 'ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

}
