import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Dropdown, Toast } from 'materialize-css';
import M from 'materialize-css';

@Component({
  selector: 'app-button-share',
  templateUrl: './button-share.component.html',
  styleUrls: ['./button-share.component.scss']
})
export class ButtonShareComponent implements OnInit {
  @Input() link: string;

  dropdownRef: HTMLElement;
  dropDown: Dropdown;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.link = 'www.google.com';
    this.dropdownRef = this.elRef.nativeElement.querySelector('#share-button');
    this.dropDown = Dropdown.init(this.dropdownRef);
  }

  onCopy() {
    M.toast({html: 'Kopiert'});
  }

}
