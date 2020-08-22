import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Modal } from 'materialize-css';
import { AngularFirestore } from '@angular/fire/firestore';
import { SubscriberService } from '../admin/subscriber.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  elem: HTMLElement;
  instance: Modal;
  subscribeForm = this.fb.group({
    email: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private elRef: ElementRef,
    private subscriberService: SubscriberService) { }

  ngOnInit(): void {
    this.elem = this.elRef.nativeElement.querySelector('.modal');
    this.instance = Modal.init(this.elem);
  }

  onSubmit(): void {
    this.subscriberService.createSubscriber({email: this.subscribeForm.value.email});
    this.instance.open();
  }

}
