import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { UserComponent } from './user/user.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';

@NgModule({
  declarations: [AppComponent, MyFirstComponentComponent, UserComponent, CarteVisiteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
