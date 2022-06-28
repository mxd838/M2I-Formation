import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [AppComponent, MyFirstComponentComponent, UserComponent, CarteVisiteComponent, AlertButtonComponent, ListeComponent, MagieComponent, ListeFiltreeComponent, ShowDateComponent, GenericAlertButtonComponent, ButtonMenuComponent, ListeCoursesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
