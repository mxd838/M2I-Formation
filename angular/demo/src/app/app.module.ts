import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { UserComponent } from './user/user.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { ListeComponent } from './liste/liste.component';
import { MagieComponent } from './magie/magie.component';
import { ListeFiltreeComponent } from './liste-filtree/liste-filtree.component';
import { ShowDateComponent } from './show-date/show-date.component';
import { GenericAlertButtonComponent } from './generic-alert-button/generic-alert-button.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';
import { ReactiveListeCoursesComponent } from './reactive-liste-courses/reactive-liste-courses.component';
import { CorrecTp1Component } from './correc-tp1/correc-tp1.component';
import { CorrecTp1BtnComponent } from './correc-tp1-btn/correc-tp1-btn.component';
import { FormBuilderListeCoursesComponent } from './form-builder-liste-courses/form-builder-liste-courses.component';
import { DataCoursesComponent } from './Output-demo/data-courses/data-courses.component';
import { FormCoursesComponent } from './Output-demo/form-courses/form-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreeComponent,
    ShowDateComponent,
    GenericAlertButtonComponent,
    ButtonMenuComponent,
    ListeCoursesComponent,
    ReactiveListeCoursesComponent,
    CorrecTp1Component,
    CorrecTp1BtnComponent,
    FormBuilderListeCoursesComponent,
    DataCoursesComponent,
    FormCoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
