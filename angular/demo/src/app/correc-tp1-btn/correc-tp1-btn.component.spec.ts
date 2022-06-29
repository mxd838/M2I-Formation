import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecTp1BtnComponent } from './correc-tp1-btn.component';

describe('CorrecTp1BtnComponent', () => {
  let component: CorrecTp1BtnComponent;
  let fixture: ComponentFixture<CorrecTp1BtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrecTp1BtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrecTp1BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
