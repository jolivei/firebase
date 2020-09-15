import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/firebase/database.service'
@Component({
  selector: 'app-carta-lista',
  templateUrl: './carta-lista.component.html',
  styleUrls: ['./carta-lista.component.css']
})
export class CartaListaComponent implements OnInit {
  productos
  entrantes
  dulces
  categoriaPlatos: string[] = ['Entrantes y tapas', 'Ensaladas', 'Platos', 'Dulces']
  constructor(private dataBase:DatabaseService) { }

  ngOnInit(): void {
    this.dataBase.getProduts().subscribe((products) => {
      this.productos = products;
      this.entrantes = products.filter(
        (item) =>
          item.categoria == 'Entrantes y tapas' && item.eliminar == false
      );
      this.dulces = products.filter((item) => item.categoria == 'Dulces');
    });

  }
  deleteProduct(product){
    this.dataBase.borrarProductos(product.id)
  }
  disponible(tapa){
    this.dataBase.hacerNoDisponible(tapa)

  }

}
