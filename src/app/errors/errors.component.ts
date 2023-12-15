import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {

  minlength:number=2 ;
  maxlength:number=50;


  @Input() errors: any;
  @Input() errorMsgRequired: string = 'Ce champ est obligatoire.';
  @Input() errorMsgMinLength: string = 'La longueur minimale n’est pas atteinte.';
  @Input() errorMsgMaxLength: string = 'La longueur maximale est dépassée.';
  
}
