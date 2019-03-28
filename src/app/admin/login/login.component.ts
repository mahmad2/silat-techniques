import { Component, OnInit } from '@angular/core';
import { AuthService } from  './../../auth/auth.service.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  authService: AuthService, db: AngularFireDatabase) { }

  ngOnInit() {
  }

}
