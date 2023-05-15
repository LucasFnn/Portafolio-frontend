import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosedicionComponent } from './proyectosedicion.component';

describe('ProyectosedicionComponent', () => {
  let component: ProyectosedicionComponent;
  let fixture: ComponentFixture<ProyectosedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosedicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
