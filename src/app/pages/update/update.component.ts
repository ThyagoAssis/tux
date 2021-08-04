import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Foto } from '../../interfaces/foto';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  titlePage = 'Fomulário de Atualização';
  routerId = null;
  foto: Foto = {};
  alerta: boolean;
  
  constructor(
    private ar: ActivatedRoute,
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void {
    this.routerId = this.ar.snapshot.params['id'];

    if(this.routerId){
      this.firebase.getFoto(this.routerId).subscribe(carrinho => this.foto = carrinho )
    }  
  }

   //Metodo do botão submit (Editar)
   update(form){
     try{
      this.firebase.upFoto(this.routerId, form.value);
      this.alerta = !this.alerta;
     }catch(err){
      console.error(err);
     }
      
  }
}
