import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({ // building the form using form builder
      emailAddr: new FormControl(), // creating the form elements
      quantity: new FormControl(), // same as form
      terms: new FormControl(),
    });
  }

  ngOnInit(): void {}
// add stuff to the form and view it in the console
  postDate(){
    // console.log(this.checkoutForm);
    console.log(this.checkoutForm.value)
    console.log(`email address ` + this.checkoutForm.value.emailAddr)

  }
}
