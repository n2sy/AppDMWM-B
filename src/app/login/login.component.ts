import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultValue = 'dmwm';
  clr = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f)
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
