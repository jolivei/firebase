import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  slideUp = {
    duration: 2000,
      origin: 'left',
      distance: '500px',
};
  constructor() { }

  ngOnInit(): void {
  }

}
