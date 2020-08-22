import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageWebpageID } from '../admin/messageWebpage';
import { Modal } from 'materialize-css';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {
  @Input() messagesWebpage: Observable<MessageWebpageID[]>;
  @Output() sendEmailEvent = new EventEmitter<MessageWebpageID>();
  @Output() deleteMessageEvent = new EventEmitter<string>();

  deleteModalRef: HTMLElement;
  deleteModal: Modal;

  clickedMessageID: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.deleteModalRef = this.elRef.nativeElement.querySelector('#deleteModal-message');
    this.deleteModal = Modal.init(this.deleteModalRef);
  }

  sendEmail(mssageWebpageID: MessageWebpageID): void {
    this.sendEmailEvent.emit(mssageWebpageID);
  }

  openDeleteModal(id: string) {
    this.clickedMessageID = id;
    this.deleteModal.open();
  }

  deleteMessage(id: string) {
    this.deleteMessageEvent.emit(id);
  }

}
