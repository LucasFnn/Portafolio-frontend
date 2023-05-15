import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContGralComponent } from './add-cont-gral.component';

describe('AddContGralComponent', () => {
  let component: AddContGralComponent;
  let fixture: ComponentFixture<AddContGralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContGralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
