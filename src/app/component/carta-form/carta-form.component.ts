import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Productos} from '../../models/productos'
import {DatabaseService} from '../../services/firebase/database.service'
@Component({
  selector: 'app-carta-form',
  templateUrl: './carta-form.component.html',
  styleUrls: ['./carta-form.component.css']
})
export class CartaFormComponent implements OnInit {
  cartaForm: FormGroup;
  selectedTipo: string
  producto: Productos
  tipos: string[] = ['Platos', 'Vinos']
  categoriaPlatos: string[] = ['Entrantes y tapas', 'Ensaladas', 'Platos', 'Dulces']
  categoriaVinos: string[] = ['Albariños D.O. Rias Baixas', 'Riojas', 'Ribera del Duero', 'D.O. Ribeira Sacra', 'D.O. Ribeiro', 'D.O. Castilla y León']
  constructor(private fb: FormBuilder, public svcFirebase: DatabaseService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void {
    this.cartaForm = this.fb.group({
      nombreplato: ['', [Validators.required,]]
      ,
      precio: [0, Validators.required],
      creado: [new Date(), Validators.required],
      disponible: [true],
      eliminar: [false],
      tipo: ['Platos', Validators.required],
      categoria: ['Entrantes y tapas', Validators.required],
      descripcion: ['']
    });
  }
  selectedValue: string;
  enviar(){
    //this.producto.creado=new Date(this.cartaForm.get('creado').value)
    let fecha= new Date(this.cartaForm.get('creado').value)
    console.log(fecha);
    //console.log(this.producto.creado);

    this.svcFirebase.addProduct(this.cartaForm.value)
    console.log(this.cartaForm.value);

    this.cartaForm.reset()
    this.cartaForm.get('creado').setValue(new Date())

  }
}
