import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import M from 'materialize-css';

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

  constructor(private fb: FormBuilder, private elRef: ElementRef) { }

  ngOnInit(): void {
    this.elem = this.elRef.nativeElement.querySelector('.modal');
    this.instance = M.Modal.init(this.elem);
  }

  onSubmit() {
    console.log('Submitted', this.contactForm.value);
    console.log(this.elem);
    console.log(typeof(this.instance));
    this.instance.open();
  }

}
