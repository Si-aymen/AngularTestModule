import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';

//1- configurer les routes
const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:ResidencesComponent},
  {path:"Add", component:FormAppartmentComponent},
  {path:"apartments/:id", component:ApartmentsComponent},
  {path:"apartments", component:ApartmentsComponent},
  {path:"AddRes", component:FormResidenceComponent},
  {path:"addApartment", component:FormAppartmentComponent},
  //le path "**" doit être toujours la dernière route
  {path:"**", component:NotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
