import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoGeneralComponent } from './contenido-general.component';

describe('ContenidoGeneralComponent', () => {
  let component: ContenidoGeneralComponent;
  let fixture: ComponentFixture<ContenidoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
