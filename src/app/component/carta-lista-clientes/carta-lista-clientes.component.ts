import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/firebase/database.service'
@Component({
  selector: 'app-carta-lista-clientes',
  templateUrl: './carta-lista-clientes.component.html',
  styleUrls: ['./carta-lista-clientes.component.css']
})
export class CartaListaClientesComponent implements OnInit {
  dulces;
  productos;
  entrantes
  slideUp = {
    duration: 2000,
      origin: 'left',
      distance: '500px',
};
  constructor(private dataBase: DatabaseService) { }

  ngOnInit(): void {
    this.dataBase.getProduts().subscribe(products=>
      {this.productos=products
      this.entrantes=products.filter(item=>item.categoria=='Entrantes y tapas')
      this.dulces=products.filter(item=>item.categoria=='Dulces')

    }
      )
  }

}
