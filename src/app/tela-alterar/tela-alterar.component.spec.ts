import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAlterarComponent } from './tela-alterar.component';

describe('TelaAlterarComponent', () => {
  let component: TelaAlterarComponent;
  let fixture: ComponentFixture<TelaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
