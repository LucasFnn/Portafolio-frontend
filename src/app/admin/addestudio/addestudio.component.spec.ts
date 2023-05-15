import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddestudioComponent } from './addestudio.component';

describe('AddestudioComponent', () => {
  let component: AddestudioComponent;
  let fixture: ComponentFixture<AddestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddestudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
