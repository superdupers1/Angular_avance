import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avance_angular';
    loggedUser: any;
    constructor(private router: Router) {
      const localUser = localStorage.getItem('loggedUser');
      if(localUser != null) {
        this.loggedUser = JSON.parse(localUser);
      }
    }
  
    onLogoff() {
      localStorage.removeItem('loggedUser');
      this.router.navigateByUrl('/login')
    }
    
    onHome() {
      this.router.navigateByUrl('/home')
    }
}
