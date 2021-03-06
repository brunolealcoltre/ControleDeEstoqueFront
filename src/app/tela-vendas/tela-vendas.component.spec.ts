import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaVendasComponent } from './tela-vendas.component';

describe('TelaVendasComponent', () => {
  let component: TelaVendasComponent;
  let fixture: ComponentFixture<TelaVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
