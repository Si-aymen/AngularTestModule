import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Bonjour AngularSAE7';
  style1={'background-color':'red'};
  f(ch:string){
    console.log("test"+" "+ch);
  }
}
