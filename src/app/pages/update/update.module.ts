import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateComponent } from './update.component';
import { UpdateRoutingModule } from './contato-routing.module';


@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule    
  ],
  exports: [UpdateComponent]
})
export class UpdateModule { }
