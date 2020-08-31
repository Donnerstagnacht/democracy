import { Component, OnInit, Inject } from '@angular/core';
import { EmailSubscriberID } from '../../models/emailSubscriber';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-delete-email-dialog',
  templateUrl: './admin-delete-email-dialog.component.html',
  styleUrls: ['./admin-delete-email-dialog.component.scss']
})
export class AdminDeleteEmailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public subscriber: EmailSubscriberID) { }

  ngOnInit(): void {
  }

}
