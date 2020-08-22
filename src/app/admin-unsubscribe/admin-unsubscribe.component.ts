import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriberService } from '../admin/subscriber.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminUnsubscribeDialogComponent } from '../admin-unsubscribe-dialog/admin-unsubscribe-dialog.component';

@Component({
  selector: 'app-admin-unsubscribe',
  templateUrl: './admin-unsubscribe.component.html',
  styleUrls: ['./admin-unsubscribe.component.scss']
})
export class AdminUnsubscribeComponent implements OnInit {
  unsubscribeForm = this.fb.group({
    email: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private subscriberService: SubscriberService,
    private fb: FormBuilder,
    public matDialogRef: MatDialog) { }

  ngOnInit(): void {}

  unsubscribe(): void {
    this.subscriberService.unsubscribe(this.unsubscribeForm.value.email);
    const dialogRef: MatDialogRef<AdminUnsubscribeDialogComponent> = this.matDialogRef.open(AdminUnsubscribeDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
