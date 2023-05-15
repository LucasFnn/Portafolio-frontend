import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhabilidadComponent } from './addhabilidad.component';

describe('AddhabilidadComponent', () => {
  let component: AddhabilidadComponent;
  let fixture: ComponentFixture<AddhabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
