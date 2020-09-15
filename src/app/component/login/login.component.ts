import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from '../../services/firebase/auth.service'

  import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb:FormBuilder, private router:Router, private  authService:  AuthService) { this.initForm() }

  ngOnInit(): void {
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
  }
  async login(){
   console.log(this.loginForm.value)
   const {email,password}=this.loginForm.value
   //const password=this.loginForm.get('password').value
   const usuarioregistrado= await this.authService.login(email,password)
  //const user=await this.authService.getCurrentUser()
//    console.log(user);

    //this.authService.pasarUsuario(user)
   this.router.navigate(['/cartaform'])
  }
}
