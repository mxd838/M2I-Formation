import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecTp1Component } from './correc-tp1.component';

describe('CorrecTp1Component', () => {
  let component: CorrecTp1Component;
  let fixture: ComponentFixture<CorrecTp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrecTp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrecTp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
