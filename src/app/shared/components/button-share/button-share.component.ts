import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button-share',
  templateUrl: './button-share.component.html',
  styleUrls: ['./button-share.component.scss']
})
export class ButtonShareComponent implements OnInit {
  @Input() link: string;

  snackBar: MatSnackBar;

  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackbar() {
    this.matSnackBar.open('Kopiert!', 'ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

}
