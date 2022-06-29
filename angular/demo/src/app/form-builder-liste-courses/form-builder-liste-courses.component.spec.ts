import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderListeCoursesComponent } from './form-builder-liste-courses.component';

describe('FormBuilderListeCoursesComponent', () => {
  let component: FormBuilderListeCoursesComponent;
  let fixture: ComponentFixture<FormBuilderListeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderListeCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderListeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
