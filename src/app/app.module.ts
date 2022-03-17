import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';

import { FormsModule } from '@angular/forms';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShelterComponent } from './shelter/shelter.component';


@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    IngredientsComponent,
    CheckoutComponent,
    ShelterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
