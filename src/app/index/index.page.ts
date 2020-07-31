import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  constructor(
    private authservice: AuthenticationService,
    private router: Router
  ) {
    if(this.authservice.isLoggedIn){
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {}
  forgotPass(name) {
    this.authservice.PasswordRecover(name.value);
  }
}
