import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  products:Observable<any[]>
  entrantes:Observable<any[]>
  productosCollection:AngularFirestoreCollection
  productDoc: AngularFirestoreDocument

  constructor(public db:AngularFirestore) {
   // this.products=this.db.collection('productos').valueChanges()
    this.productosCollection=this.db.collection('productos')
    this.products=this.productosCollection.snapshotChanges().pipe(map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          data.id=a.payload.doc.id
          return data
        })
    }))
  }
  getProduts(){
    return this.products
  }
  addProduct(prod){
    this.db.collection('productos').add(prod)
  }
  getStarters(){
    this.entrantes=this.products.pipe(map(items=>items.filter(item=>item.categoria=='Entrantes')))
  }
  borrarProductos(product){
    this.productDoc=this.db.doc(`productos/${product.id}`)
    this.productDoc.update(product)

  }
  hacerNoDisponible(tapa){
    this.productDoc=this.db.doc(`productos/${tapa.id}`)
    this.productDoc.update(tapa)

  }
}
