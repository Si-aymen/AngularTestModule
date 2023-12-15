import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestModule } from './test/test.module';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { ErrorsComponent } from './errors/errors.component';
import { ListApartmentComponent } from './list-apartment/list-apartment.component';
import { UpdateApartmentComponent } from './update-apartment/update-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ResidencesComponent,
    ApartmentsComponent,
    FormResidenceComponent,
    NotFoundComponent,
    FormAppartmentComponent,
    ErrorsComponent,
    ListApartmentComponent,
    UpdateApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,// pour le FormGroup 
    FormsModule //pour pouvoir utiliser la directive ngModel
  ],
  providers: [],
  //les composants à appeler dans le fichier index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
