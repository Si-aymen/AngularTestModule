// list-apartment.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css']
})
export class ListApartmentComponent implements OnInit {

  select : any = null ;
  addApartmentMode: boolean = false;

  apartments = [
    {id:1, "appartNum":1, "floorNum":0, "surface":100, "terrace":"oui", "surfaceTerrace":20, "category":"S+1", "description":"Appartement S+1"},
    {id:2, "appartNum":2, "floorNum":0, "surface":130, "terrace":"non", "surfaceTerrace":0, "category":"S+2", "description":"Appartement S+2"},
    {id:3, "appartNum":3, "floorNum":0, "surface":150, "terrace":"oui", "surfaceTerrace":30, "category":"S+3", "description":"Appartement S+3"}
  ]; 

  constructor() { }

  ngOnInit(): void {
  }
  
  Add() : void{
    this.addApartmentMode = true ;
  }

  onDelete(apartmentId: number): void {
    this.apartments = this.apartments.filter(a => a.id !== apartmentId);
  }

  onUpdate(apartmentId: number): void {
    console.log('Update functionality for apartment ID:', apartmentId);
  }

}