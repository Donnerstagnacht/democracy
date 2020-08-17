import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailSubscriberID, EmailSubscriber } from '../admin/emailSubscriber';

import { Modal, Tabs } from 'materialize-css';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminEmailReplyCurtainService } from '../admin-email-reply-curtain.service';

@Component({
  selector: 'app-admin-subscribers',
  templateUrl: './admin-subscribers.component.html',
  styleUrls: ['./admin-subscribers.component.scss']
})
export class AdminSubscribersComponent implements OnInit {
  @Input() subscribers: Observable<EmailSubscriberID[]>;
  @Output() deleteSubscriberEvent = new EventEmitter<EmailSubscriberID>();
  @Output() editSubscriberEvent = new EventEmitter<EmailSubscriberID>();
  @Output() addSubscriberEvent = new EventEmitter<EmailSubscriber>();
  @Output() filterEmailEvent = new EventEmitter<string>();
  @Output() sendEmailEvent = new EventEmitter<EmailSubscriberID>();

  editEmailForm = this.fb.group({
    editEmail: ['', [Validators.required]]
  });

  addEmailForm = this.fb.group({
    addEmail: ['', [Validators.required]]
  });

  deleteModalRef: HTMLElement;
  deleteModal: Modal;

  editModalRef: HTMLElement;
  editModal: Modal;


  tabsTableRef: HTMLElement;
  tabsTable: Tabs;

  filterString: string;
  clickedSubscriber: EmailSubscriberID;
  clickedEmail: string;

  constructor(
    private elRef: ElementRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.filterString = '';
    this.deleteModalRef = this.elRef.nativeElement.querySelector('#deleteModal');
    this.deleteModal = Modal.init(this.deleteModalRef);

    this.editModalRef = this.elRef.nativeElement.querySelector('#editModal');
    this.editModal = Modal.init(this.editModalRef);

    this.tabsTableRef = this.elRef.nativeElement.querySelector('#tabsTable');
    this.tabsTable = Tabs.init(this.tabsTableRef);
  }

  openEditModal(subscriber: EmailSubscriberID) {
    this.clickedSubscriber = subscriber;
    this.editModal.open();
  }

  edit(subscriber: EmailSubscriberID): void {
    subscriber.email = this.editEmailForm.value.editEmail;
    this.editSubscriberEvent.emit(subscriber);
  }

  openDeleteModal(subscriber: EmailSubscriberID): void {
    this.clickedSubscriber = subscriber;
    this.deleteModal.open();
  }

  delete(subscriber: EmailSubscriberID): void {
    this.deleteSubscriberEvent.emit(subscriber);
  }

  addEmail(): void {
    const subscriber: EmailSubscriber = {email: this.addEmailForm.value.addEmail};
    this.addSubscriberEvent.emit(subscriber);
    this.addEmailForm.reset();
  }

  filterEmail(): void {
    this.filterEmailEvent.emit(this.filterString);
  }

  sendEmail(subscriber: EmailSubscriberID): void {
    this.sendEmailEvent.emit(subscriber);
  }

}
