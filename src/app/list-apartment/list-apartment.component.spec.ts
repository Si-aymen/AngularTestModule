import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApartmentComponent } from './list-apartment.component';

describe('ListApartmentComponent', () => {
  let component: ListApartmentComponent;
  let fixture: ComponentFixture<ListApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
