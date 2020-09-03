import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageWebpage } from '../../../admin/models/messageWebpage';
import { MessagesService } from '../../../admin/services/messages.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { GeneralFormsService } from '../../../shared/services/general-forms.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    topic: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  topics$: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private messagesService: MessagesService,
    private matDialogRef: MatDialog,
    private generalFormsService: GeneralFormsService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.topics$ = this.languageService.getTranslationObservable('topics', 'landing');
    this.topics$.subscribe();
    }

  onSubmit() {
    const newMessage: MessageWebpage = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      topic: this.contactForm.value.topic,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      responded: false
    };
    this.messagesService.createMessage(newMessage);
    const dialogRef: MatDialogRef<ContactDialogComponent> = this.matDialogRef.open(ContactDialogComponent, {
      data: newMessage
    });
  }

  errorHandling(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.contactForm, control, error);
  }

}
