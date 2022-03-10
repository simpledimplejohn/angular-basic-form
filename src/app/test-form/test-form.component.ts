import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms'
import { User } from '../user'


@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],

})
export class TestFormComponent  {

  userModel = new User('john')

  getData(data:NgForm) {
    console.log(this.userModel);
    console.log(data)
  }

}
