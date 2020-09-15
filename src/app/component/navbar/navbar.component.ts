import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from 'firebase';
import {AuthService} from '../../services/firebase/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  user
  public isLogged=false
  constructor(public  authService:  AuthService, private route: Router ) {

  }
  irBodega(){
    this.route.navigateByUrl('/carta/#bodega')
  }

  async ngOnInit() {
    //const user=await this.authService.getCurrentUser()
    //console.log(user);
   this.authService.currentUsuario.subscribe(user=>{
    this.user=user
    //if(this.user) this.isLogged=true
    console.log(this.user);

   }

   )
   //console.log(this.user);




    //const user= await
    /* this.authService.getCurrentUser().subscribe(user=>{
      this.user=user;
      if(this.user){
        this.isLogged=true
      }
    }); */
      /* this.user=user    )
    this.user=user
    console.log(user);
    if(this.user){
      this.isLogged=true
    } */


  }
  logout(){
    /* if(localStorage.getItem('user')){
      this.user=localStorage.getItem('user')
      this.isLogged=true
    }else{
      this.user=null
    } */
    this.authService.logout()
    this.isLogged=false

  }

}
