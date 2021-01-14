import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nombre:string;

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  editar(){
    this.auth.auth.currentUser.updateProfile({
      displayName:this.nombre
    });
  }
}
