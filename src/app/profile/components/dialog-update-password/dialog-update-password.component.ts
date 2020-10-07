import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';

@Component({
  selector: 'app-dialog-update-password',
  templateUrl: './dialog-update-password.component.html',
  styleUrls: ['./dialog-update-password.component.scss']
})
export class DialogUpdatePasswordComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogUpdatePasswordComponent>
  ) { }

  ngOnInit(): void {
  }
  confirmUpdatePassword(loggedInStatus: boolean): void {
    this.dialogRef.close(loggedInStatus);
  }

}
