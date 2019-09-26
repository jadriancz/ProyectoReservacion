import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigetionComponent } from './components/navigetion/navigetion.component';

import {CompaniaService} from './services/compania.service';
import { CompaniaFormComponent } from './components/compania-form/compania-form.component';
import { CompaniaListComponent } from './components/compania-list/compania-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigetionComponent,
    CompaniaFormComponent,
    CompaniaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CompaniaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
