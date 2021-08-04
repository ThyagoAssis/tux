import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titlePage = "Formulário de Cadastro";  
  form: FormGroup;
  alerta: boolean;

  constructor(
    private fb: FormBuilder,
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void {
    this.validaForm();
  }

  validaForm(){
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      autor: ['', [Validators.required, Validators.minLength(3)]],
      endereco: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  //Método do botão Submit
  cadastrar(){
    try{
      this.firebase.cadFoto(this.form.value);
      this.form.reset()
    }catch(err){
      console.error(err);
    }finally{
      this.alerta = !this.alerta;
    }
   
  }
 

}
