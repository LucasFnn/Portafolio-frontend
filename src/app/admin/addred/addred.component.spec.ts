import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddredComponent } from './addred.component';

describe('AddredComponent', () => {
  let component: AddredComponent;
  let fixture: ComponentFixture<AddredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
