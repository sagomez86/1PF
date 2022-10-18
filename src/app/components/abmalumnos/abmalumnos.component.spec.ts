import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMAlumnosComponent } from './abmalumnos.component';

describe('ABMAlumnosComponent', () => {
  let component: ABMAlumnosComponent;
  let fixture: ComponentFixture<ABMAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABMAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
