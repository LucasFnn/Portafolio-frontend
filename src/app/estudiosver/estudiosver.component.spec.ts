import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosverComponent } from './estudiosver.component';

describe('EstudiosverComponent', () => {
  let component: EstudiosverComponent;
  let fixture: ComponentFixture<EstudiosverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
