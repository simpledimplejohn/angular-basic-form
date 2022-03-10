import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestFormComponent } from './test-form/test-form.component'

const routes: Routes = [
  {path: "", component: TestFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
