import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Modal, FormSelect} from 'materialize-css';
import { MessageWebpage } from '../admin/messageWebpage';
import { MessagesService } from '../admin/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    topic: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  contactModalElement: HTMLElement;
  contactModal: Modal;

  selectElement: HTMLElement;
  select: FormSelect;

  constructor(
    private fb: FormBuilder,
    private elRef: ElementRef,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.contactModalElement = this.elRef.nativeElement.querySelector('#modalKontakt');
    this.contactModal = Modal.init(this.contactModalElement);

    this.selectElement = this.elRef.nativeElement.querySelector('#thema');
    this.select = FormSelect.init(this.selectElement);
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

    this.contactModal.open();
  }

}
