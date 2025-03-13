import { Component} from '@angular/core';
import { Router } from '@angular/router';

//import { SwiperModule } from '@angular/swiper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent{

  loggedUser: any;
  isLoggedIn = false;
  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
      this.isLoggedIn = true;
    }
  }
  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login')
  }
  
  onLogin(){
    this.router.navigateByUrl('/login');
  }

  onHome() {
    this.router.navigateByUrl('/home')
  }
  listado() {
    this.router.navigateByUrl('/listado')
  }
  skills() {
    this.router.navigateByUrl('/skills')
  }
  nosotros(){
    this.router.navigateByUrl('/nosotros')
  }

}
