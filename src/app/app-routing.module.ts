import { ShelterComponent } from './shelter/shelter.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormComponent } from './test-form/test-form.component'

const routes: Routes = [
  {path: "template", component: TestFormComponent },
  {path: "ingredients", component: IngredientsComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "shelter", component: ShelterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
