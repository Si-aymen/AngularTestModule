import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  surface : number;
  name : string = "valeur initial";
  name2 : string = "";
  setName(val:string){
    this.name=val;
  }

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij","address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5","image":"../../assets/images/R4.jpg"}
    ];

    listApartments:Apartment[]=[
{id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0] },
{id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0] },
{id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1] }

]; 

list : Apartment[]=[];
getApartments(nb:number){
  this.list=[];
  for ( let a of this.listApartments){
     console.log(a);
     if (a.residence.id == nb){
          this.list.push(a);
     }
  }
}

list_like_app =[];
add_tolist_like_app(nb: number){
  // Find the apartment in listApartments with the matching id
  const apartment = this.listApartments.find(a => a.id === nb);
  
  // If found, and not already in list_like_app, add it
  if (apartment && !this.list_like_app.some(a => a.id === apartment.id)) {
    this.list_like_app.push(apartment);
  }
}

showLikedApp = [];
getLiked(){
  return this.showLikedApp=this.list_like_app ; 
}

getListApartments() {
  return this.listApartments;
} 



}
