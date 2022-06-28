import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFiltreeComponent } from './liste-filtree.component';

describe('ListeFiltreeComponent', () => {
  let component: ListeFiltreeComponent;
  let fixture: ComponentFixture<ListeFiltreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFiltreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFiltreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
