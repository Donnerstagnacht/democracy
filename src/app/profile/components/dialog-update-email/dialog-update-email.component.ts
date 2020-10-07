import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';

@Component({
  selector: 'app-dialog-update-email',
  templateUrl: './dialog-update-email.component.html',
  styleUrls: ['./dialog-update-email.component.scss']
})
export class DialogUpdateEmailComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogUpdateEmailComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmUpdateEmail(loggedInStatus: boolean): void {
    this.dialogRef.close(loggedInStatus);
  }

}
