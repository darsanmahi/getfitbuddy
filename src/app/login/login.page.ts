import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private authservice: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  login(name, pword) {
    this.authservice.SignIn(name.value, pword.value).then((a) => {
      this.router.navigate(['/home']);
    });
  }
}
