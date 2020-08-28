import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageWebpageID } from '../admin/messageWebpage';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminDeleteMessageDialogComponent } from '../admin-delete-message-dialog/admin-delete-message-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {
  @Input() messagesWebpage: Observable<MessageWebpageID[]>;
  @Output() sendEmailEvent = new EventEmitter<MessageWebpageID>();
  @Output() deleteMessageEvent = new EventEmitter<string>();

  constructor(
    public matgDialog: MatDialog,
    private matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void { }

  sendEmail(mssageWebpageID: MessageWebpageID): void {
    this.sendEmailEvent.emit(mssageWebpageID);
  }

  openDeleteModal(message: MessageWebpageID) {
    const dialogRef: MatDialogRef<AdminDeleteMessageDialogComponent> = this.matgDialog.open(AdminDeleteMessageDialogComponent, {
      data: message
    });
    dialogRef.afterClosed().subscribe((deleteMessage: MessageWebpageID) => {
      if (deleteMessage) {
        this.deleteMessageEvent.emit(message.id);
        this.openSnackbar('Nachricht gelöscht');
      }
    });
  }

  openSnackbar(message: string) {
    this.matSnackBar.open(message, 'ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

}
