import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFabricanteComponent } from './tela-fabricante.component';

describe('TelaFabricanteComponent', () => {
  let component: TelaFabricanteComponent;
  let fixture: ComponentFixture<TelaFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
