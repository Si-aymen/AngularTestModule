import { Component,Injectable, Input } from '@angular/core';
import { ResidencesComponent } from '../residences/residences.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ApartmentsComponent  {

  @Input() apartment: any;


  list2 = [];
  id : number ; 
  //constructor(private sharedDataService: ResidencesComponent) {}
  constructor(private ac : ActivatedRoute){}
  
  ngOnInit() {
    //this.list2 = this.sharedDataService.getListApartments();
    //this.id=this.ac.snapshot.params['id'];
    this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));

  }
  



}
