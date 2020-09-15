import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from 'firebase';
import {AuthService} from '../../services/firebase/auth.service'


@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit {
  user
  public isLogged=false
  constructor(public authService : AuthService) { }

  async ngOnInit() {
    /* this.authService.currentUsuario.subscribe(usuario=>console.log(usuario),
    er=>console.log(er)

    ) */
    const user=await this.authService.getCurrentUser()
    if(user){

      console.log(user);

    }else{
      console.log('no user');

    }
  }
  logout(){
    this.authService.logout()
  }
}
