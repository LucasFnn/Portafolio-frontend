import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarredComponent } from './editarred.component';

describe('EditarredComponent', () => {
  let component: EditarredComponent;
  let fixture: ComponentFixture<EditarredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
