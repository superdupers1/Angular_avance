import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements AfterViewInit {
  @ViewChild('verMasBtn') verMasBtn!: ElementRef;
  @ViewChild('infoAdicional') infoAdicional!: ElementRef;

  loggedUser: any;
  constructor(private router: Router) {
    //debugger
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  ngAfterViewInit() {
    if (this.verMasBtn && this.infoAdicional) {
      this.verMasBtn.nativeElement.addEventListener('click', () => {
        //debugger
        if (this.infoAdicional.nativeElement.style.display === 'none' || this.infoAdicional.nativeElement.style.display === '') {
          this.infoAdicional.nativeElement.style.display = 'block';
          this.verMasBtn.nativeElement.textContent = 'Ver menos';
        } else {
          this.infoAdicional.nativeElement.style.display = 'none';
          this.verMasBtn.nativeElement.textContent = 'Ver más';
        }
      });
    } else {
      console.error("verMasBtn or infoAdicional elements not found");
    }
  }
 
}

