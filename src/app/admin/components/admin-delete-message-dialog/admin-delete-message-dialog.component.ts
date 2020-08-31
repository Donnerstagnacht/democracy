import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageWebpageID } from '../../models/messageWebpage';

@Component({
  selector: 'app-admin-delete-message-dialog',
  templateUrl: './admin-delete-message-dialog.component.html',
  styleUrls: ['./admin-delete-message-dialog.component.scss']
})
export class AdminDeleteMessageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public messageWebpage: MessageWebpageID) { }

  ngOnInit(): void {
  }

}
