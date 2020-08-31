import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailSubscriberID, EmailSubscriber } from '../../models/emailSubscriber';

import { Tabs } from 'materialize-css';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminDeleteEmailDialogComponent } from '../admin-delete-email-dialog/admin-delete-email-dialog.component';
import { AdminEditSubscriberDialogComponent } from '../admin-edit-subscriber-dialog/admin-edit-subscriber-dialog.component';
import { GeneralFormsService } from '../../../shared/services/general-forms.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    editEmail: ['', [Validators.email]]
  });

  addEmailForm = this.fb.group({
    addEmail: ['', [Validators.required]]
  });

  tabsTableRef: HTMLElement;
  tabsTable: Tabs;

  filterString: string;

  constructor(
    private elRef: ElementRef,
    private fb: FormBuilder,
    private matDialogRef: MatDialog,
    private generalFormsService: GeneralFormsService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.filterString = '';

    this.tabsTableRef = this.elRef.nativeElement.querySelector('#tabsTable');
    this.tabsTable = Tabs.init(this.tabsTableRef);
  }

  edit(subscriber: EmailSubscriberID) {
    const dialogRef: MatDialogRef<AdminEditSubscriberDialogComponent> = this.matDialogRef.open(AdminEditSubscriberDialogComponent, {
      data: subscriber
    });
    dialogRef.afterClosed().subscribe((editSubscriber: EmailSubscriberID) => {
      if (editSubscriber) {
        this.editSubscriberEvent.emit(subscriber);
        this.openSnackbar('Subscriber geändert');
      }
    });
  }

  delete(subscriber: EmailSubscriberID): void {
    const dialogRef: MatDialogRef<AdminDeleteEmailDialogComponent> = this.matDialogRef.open(AdminDeleteEmailDialogComponent, {
      data: subscriber
    });
    dialogRef.afterClosed().subscribe((deleteSubscriber: EmailSubscriberID) => {
      if (deleteSubscriber) {
        this.deleteSubscriberEvent.emit(subscriber);
        this.openSnackbar('Subscriber gelöscht');
      }
    });
  }

  addEmail(): void {
    const subscriber: EmailSubscriber = {email: this.addEmailForm.value.addEmail};
    this.addSubscriberEvent.emit(subscriber);
    this.addEmailForm.reset();
    this.openSnackbar('Subscriber hinzugefügt');
  }

  filterEmail(): void {
    this.filterEmailEvent.emit(this.filterString);
  }

  sendEmail(subscriber: EmailSubscriberID): void {
    this.sendEmailEvent.emit(subscriber);
  }

  errorHandlingAddEmail(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.addEmailForm, control, error);
  }

  errorHandlingEditEmail(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.editEmailForm, control, error);
  }

  openSnackbar(message: string) {
    this.matSnackBar.open(message, 'ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
