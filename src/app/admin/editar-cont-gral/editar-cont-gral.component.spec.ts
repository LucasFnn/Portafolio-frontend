import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContGralComponent } from './editar-cont-gral.component';

describe('EditarContGralComponent', () => {
  let component: EditarContGralComponent;
  let fixture: ComponentFixture<EditarContGralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContGralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
