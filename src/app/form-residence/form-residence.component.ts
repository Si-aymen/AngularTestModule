import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
  Form : FormGroup ;

  
  ngOnInit() {
    this.Form = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2)]),
      Adress : new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2)]),
      imageInput : new FormControl('',[Validators.required]),

  })
  }

  onImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.Form.patchValue({ imageInput: file });
      this.Form.get('imageInput').updateValueAndValidity();
    }
  }


}
