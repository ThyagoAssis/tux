import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-panelcontrol',
  templateUrl: './panelcontrol.component.html',
  styleUrls: ['./panelcontrol.component.css']
})
export class PanelcontrolComponent implements OnInit {
  fotos = [];
  constructor(
    private firebase: FirebaseService
  ) { }
  
  ngOnInit(): void {
    this.firebase.getAllFotos().subscribe(results => this.fotos = results)
  }

}
