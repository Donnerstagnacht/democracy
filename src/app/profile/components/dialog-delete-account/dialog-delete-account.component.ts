import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';

@Component({
  selector: 'app-dialog-delete-account',
  templateUrl: './dialog-delete-account.component.html',
  styleUrls: ['./dialog-delete-account.component.scss']
})
export class DialogDeleteAccountComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogDeleteAccountComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmDelete(loggedInStatus: boolean): void {
    this.dialogRef.close(loggedInStatus);
  }


}
