import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Ninja'
  password = '1'
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log("Hello");
  }

  handlelogin() {
    if (this.username === 'Ninja' && this.password === '1') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
