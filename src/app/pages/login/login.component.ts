import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  login!: FormGroup;
  isSignDivVisiable: boolean  = true;

  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  constructor(private fb: FormBuilder, private router: Router){
    // this.login = new FormGroup({});

  }
  ngOnInit() {
    this.login = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  onRegister() {

    const localUser = localStorage.getItem('angular17users');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert('Usuario registrado! favor de iniciar sesion')
  }

  onLogin() {
    if (!this.login.valid) {
      alert("Favor de completar formulario con valores validos")
    }
    else {

      const localUsers =  localStorage.getItem('angular17users');
      if(localUsers != null) {
        const users =  JSON.parse(localUsers);

        const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.login.value["email"] && user.password == this.login.value["password"]);
        if(isUserPresent != undefined) {
          localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/home');
        } else {
          alert("Usuario no registrado")
        }
      }
    }
  }

}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
