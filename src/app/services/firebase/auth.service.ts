import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User;
  public messageUsuario = new BehaviorSubject(null);
  currentUsuario = this.messageUsuario.asObservable();

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    //const user=await this.getCurrentUser()

    this.router.navigate(['cartaform']);
    //return user
  }
  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  async getCurrentUser() {
    /* this.afAuth.onAuthStateChanged(user=>{
       if(user) {
         return user
       }
     }) */
    return await this.afAuth.authState.pipe(first()).toPromise();
    
  }
  async pasarUsuario(usuario: any) {
    /* const usuario= await this.getCurrentUser()
    console.log(usuario);
    message=usuario
 */
    this.messageUsuario.next(usuario);
  }
}
