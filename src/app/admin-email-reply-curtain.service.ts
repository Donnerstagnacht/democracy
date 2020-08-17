import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminEmailReplyCurtainService {
  open = false;
  constructor() { }

  openEmailReply(email: string, id: string): void {
    if (!this.open) {
      document.getElementById('subscriber-email-id').style.width = '100%';
      this.open = true;
    } else {
      this.closeEmailReply(id);
    }
  }

  closeEmailReply(id: string): void {
    console.log();
    document.getElementById(id).style.width = '0%';
    this.open = false;
  }
}

