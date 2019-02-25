import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAlteraProdComponent } from './tela-altera-prod.component';

describe('TelaAlteraProdComponent', () => {
  let component: TelaAlteraProdComponent;
  let fixture: ComponentFixture<TelaAlteraProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAlteraProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAlteraProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
