import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = "Love turma 2019.4";
  imagem = "https://cdn.pixabay.com/photo/2021/01/09/12/28/tulips-5902188__340.jpg"
  texto = "Flor"

  constructor() { }

  ngOnInit(): void {
  }

  clique(){
    alert("Você é o nosso visitante numero 100 e acaba de ganhar um premio");
    alert('Clique em ok para receber o premio');
  }  

}
