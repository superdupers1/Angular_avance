import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
//import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [], 
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  data: any[] = [];
  tamanoPagina = 8;
  paginaActual = 1;
  paginatedData: any[] = [];

  loggedUser: any;
  
  constructor(private router: Router, private apiService: ApiService) {
    const localUser = localStorage.getItem('loggedUser');
    if (localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  ngOnInit() {
    this.llenarData();
    this.updatePaginatedData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  updatePaginatedData() {
    const startIndex = (this.paginaActual - 1) * this.tamanoPagina;
    const endIndex = startIndex + this.tamanoPagina;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.paginaActual = pageNumber;
    this.updatePaginatedData();
  }


}