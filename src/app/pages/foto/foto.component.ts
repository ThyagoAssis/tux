import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  titlePage = "Todas as Fotos";

  albumFoto = [];

  constructor(
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void {
    this.firebase.getAllFotos().subscribe(carrinho => this.albumFoto = carrinho);
  }

  //Método do botão excluir
  deletar(id) {
    try {
      this.firebase.delFoto(id);
    } catch (err) {
      console.error(err);
    }

  }



}
