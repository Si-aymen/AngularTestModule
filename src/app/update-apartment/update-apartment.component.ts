import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-apartment',
  templateUrl: './update-apartment.component.html',
  styleUrls: ['./update-apartment.component.css']
})
export class UpdateApartmentComponent {
  myForm : FormGroup ;
  ngOnInit() {
    this.myForm = new FormGroup({
      appNumber : new FormControl('',[Validators.required,Validators.pattern('^\\d+$')]),
      surface : new FormControl('',[Validators.required]), 
      floorApp : new FormControl('',[Validators.required]),
      terrace : new FormControl('',[Validators.required]),
      surfaceTerrace : new FormControl('',[Validators.required]),

      description : new FormControl('',[Validators.required]),
      residence : new FormControl('1',[Validators.required]),
      category : new FormControl('',[Validators.required]),
  })


  }


}
