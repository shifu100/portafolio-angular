import { Component, OnInit } from '@angular/core';
import { InfoPaginasService } from 'src/app/services/info-paginas.service';
// import 'animate.css';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   constructor(public _servicio: InfoPaginasService) { }

  ngOnInit(): void {
  }

}
