import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import firebase from 'firebase/';
import { auth } from 'firebase/app'; 
import 'firebase/auth';
import firebase from '@firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() action:string;

  email = 'kevin@example.com';
  pass = '123456';

  constructor(
    public auth: AngularFireAuth,
    private router: Router) { }


  ngOnInit() {
    console.log(this.action);
  }

  loginWith() {
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }
  logout() {
    this.auth.auth.signOut();
  }
  showData(){
    this.auth.user.subscribe( res => {
      console.log(res);
    });
  }

  register(){
    this.auth.auth.createUserWithEmailAndPassword(this.email,this.pass)
    .then((user) => {
      // Signed in
      // ...
      console.log(user);
      this.router.navigate(['profile']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,': ',errorMessage);
    });
  }

  customLogin(){
    this.auth.auth.signInWithEmailAndPassword(this.email,this.pass)
    .then( res => {
      console.log(res);
    })
    .catch(err => console.log('Error cl:',err));
  }

}
