import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminEmailReplyCurtainService } from '../admin-email-reply-curtain.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailReply } from './emailReply';

@Component({
  selector: 'app-admin-email-reply',
  templateUrl: './admin-email-reply.component.html',
  styleUrls: ['./admin-email-reply.component.scss']
})
export class AdminEmailReplyComponent implements OnInit {
  @Input() email: string;
  @Input() templateID: string;
  @Input() id: string;
  @Output() emailEvent = new EventEmitter<EmailReply>();
  emailReplyForm = this.fb.group({
    subject: ['', Validators.required],
    text: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private adminEmailReplyCurtainService: AdminEmailReplyCurtainService) { }

  ngOnInit(): void {
  }

  closeEmailReplyCurtain(): void {
    this.adminEmailReplyCurtainService.closeEmailReply(this.templateID);
  }

  sendEmail(): void {
    console.log('adresse', this.email);
    this.emailEvent.emit({
      email: this.email,
      subject: this.emailReplyForm.value.subject,
      text: this.emailReplyForm.value.text,
      id: this.id
    });
  }

}
