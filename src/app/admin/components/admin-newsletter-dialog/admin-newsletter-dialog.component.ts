import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Newsletter } from '../../models/newsletter';

@Component({
  selector: 'app-admin-newsletter-dialog',
  templateUrl: './admin-newsletter-dialog.component.html',
  styleUrls: ['./admin-newsletter-dialog.component.scss']
})
export class AdminNewsletterDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public newsletter: Newsletter) { }

  ngOnInit(): void {
  }

}
