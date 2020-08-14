import { Component, OnInit, ElementRef } from '@angular/core';
import { Dropdown } from 'materialize-css';

@Component({
  selector: 'app-button-share',
  templateUrl: './button-share.component.html',
  styleUrls: ['./button-share.component.scss']
})
export class ButtonShareComponent implements OnInit {

  dropdownRef: HTMLElement;
  dropDown: Dropdown;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.dropdownRef = this.elRef.nativeElement.querySelector('#share-button');
    this.dropDown = Dropdown.init(this.dropdownRef);
  }

}
