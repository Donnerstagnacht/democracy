import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Newsletter } from './newsletter';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendNewsletter(): void {
    this.newsletterEvent.emit({
      subject: this.newsletterForm.value.subject,
      text: this.newsletterForm.value.text
    });
  }

}
