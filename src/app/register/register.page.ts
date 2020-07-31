import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private authservice: AuthenticationService, private router: Router) {}

  ngOnInit() {}
  register(email, pword) {
    this.authservice.RegisterUser(email.value, pword.value).then((a) => {
      alert('Registered');
      this.router.navigate(['/login']);
    });
  }
}
