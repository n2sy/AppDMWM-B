import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultValue = 'dmwm';
  error : boolean = false;
  clr = '';
  constructor(private router : Router,
    private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    this.authService.seConnecter(f.value).subscribe(
      (response) => {
        const token = response['id'];
        localStorage.setItem('token', token);
        this.router.navigate(['cv'])
      },
      (error) => {
        this.error = true;
        f.reset();
      }
    )
    
  }

  onReset(f) {
    f.reset();
  }

  randomPwd(f) { //randomWholeForm
    f.setValue({
      login:'',
      password:'blablablbla1234566'
    }
    )
  }

  randomPwdTwo(f) {
    f.form.patchValue({
      password:'blablablbla1234566'
    }

    )
  }

}
