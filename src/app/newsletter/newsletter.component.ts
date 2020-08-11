import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import M from 'materialize-css';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmailSubscriber } from '../admin/emailSubscriber';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  elem: HTMLElement;
  instance: any;
  subscribeForm = this.fb.group({
    email: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private elRef: ElementRef,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.elem = this.elRef.nativeElement.querySelector('.modal');
    this.instance = M.Modal.init(this.elem);
  }

  onSubmit(): void {
    console.log('Submitted', this.subscribeForm.value);
    console.log(this.elem);
    console.log(typeof(this.instance));

    const subscriberCollection = this.firestore.collection<EmailSubscriber>('subscribers');
    subscriberCollection.add({email: this.subscribeForm.value.email});

    this.instance.open();
  }

}
