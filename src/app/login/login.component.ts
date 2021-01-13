import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin = true;
  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor(private authService:AuthService,private router:Router) {
    this.authService.authentication.subscribe(data=>{
      data?this.router.navigate(['/album']):this.router.navigate(['/login'])
    })
   }

  ngOnInit(): void {
  }

  onAuthentication(userData){
    this.authService.authenticate(userData);
  }
}
