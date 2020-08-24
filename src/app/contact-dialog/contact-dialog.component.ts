import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageWebpage } from '../admin/messageWebpage';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public newMessage: MessageWebpage) { }

  ngOnInit(): void {
  }

}
