import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import M from 'materialize-css';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageWebpage } from '../admin/messageWebpage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  elem: HTMLElement;
  instance: any;
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    topic: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private elRef: ElementRef,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.elem = this.elRef.nativeElement.querySelector('.modal');
    this.instance = M.Modal.init(this.elem);
  }

  onSubmit() {
    console.log('Submitted', this.contactForm.value);
    console.log(this.elem);
    console.log(typeof(this.instance));

    const messagesWebpageCollection = this.firestore.collection<MessageWebpage>('messagesWebpage');
    messagesWebpageCollection.add({
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      topic: this.contactForm.value.topic,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
    });

    this.instance.open();
  }

}
