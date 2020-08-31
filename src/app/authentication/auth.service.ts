import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  createUser(email: string, password: string): void {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('User created: ', user);
      this.router.navigate(['admin']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  loginUser(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password)
    .then (user => {
      console.log('user logged in: ', user);
      this.router.navigate(['admin']);
    }).catch((error) => {
      // return error.message;
      window.alert(error.message);
    });
  }

  logoutUser() {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
