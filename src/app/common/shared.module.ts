import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueComponent } from './dialogue/dialogue.component';
import { DialogueDirective } from './directive/dialogue.directive';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    DialogueComponent,
    DialogueDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    DialogueDirective
  ]
})
export class SharedModule { }
