import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: firebase.User;

  constructor(private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
