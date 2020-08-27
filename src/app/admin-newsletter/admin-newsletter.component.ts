import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Newsletter } from './newsletter';
import { GeneralFormsService } from '../shared/general-forms.service';

@Component({
  selector: 'app-admin-newsletter',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./admin-newsletter.component.scss']
})
export class AdminNewsletterComponent implements OnInit {
  @Output() newsletterEvent = new EventEmitter<Newsletter>();
  newsletterForm = this.fb.group({
    subject: ['', Validators.required],
    text: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private generalFormsService: GeneralFormsService
    ) { }

  ngOnInit(): void {
  }

  sendNewsletter(): void {
    this.newsletterEvent.emit({
      subject: this.newsletterForm.value.subject,
      text: this.newsletterForm.value.text
    });
  }

  errorHandling(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.newsletterForm, control, error);
  }

}
