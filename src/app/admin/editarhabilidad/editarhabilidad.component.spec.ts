import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarhabilidadComponent } from './editarhabilidad.component';

describe('EditarhabilidadComponent', () => {
  let component: EditarhabilidadComponent;
  let fixture: ComponentFixture<EditarhabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarhabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarhabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
