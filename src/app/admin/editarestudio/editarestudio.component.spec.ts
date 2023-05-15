import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarestudioComponent } from './editarestudio.component';

describe('EditarestudioComponent', () => {
  let component: EditarestudioComponent;
  let fixture: ComponentFixture<EditarestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarestudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
