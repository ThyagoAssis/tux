import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Foto } from '../interfaces/foto';
import { map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //Nossa caixinha de Coleções
  fotoCollection: AngularFirestoreCollection<Foto>

  constructor(
    private af: AngularFirestore
  ) {
    this.fotoCollection = this.af.collection<Foto>('Photos');
   }

   //Método de cadastro
   cadFoto(foto: Foto){
     return this.fotoCollection.add(foto);
   }

   //Método de consulta
   getAllFotos(){
     return this.fotoCollection.snapshotChanges().pipe(
       map(actions => {
         return actions.map(a => {
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return {id, ...data}
         })
       })
     )
   }

   //Método de consulta de um único item
   getFoto(id: string){
    return this.fotoCollection.doc<Foto>(id).valueChanges()
  }  

   //Método de atualização
   upFoto(id: string, foto: Foto ){
     return this.fotoCollection.doc(id).update(foto);
   }

   //Método de exclusão
   delFoto(id: string){
    return this.fotoCollection.doc(id).delete();
   }
}
