import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.css'],
})
export class LoanTypesComponent implements OnInit {
  addLoanTypesForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addLoanTypesForm = this.fb.group({
      loanName: new FormControl(''),
      loanType: new FormControl(''),
      loanDescription: new FormControl(''),
      'users': new FormArray([
        this.fb.group({
          'name': new FormControl(''),
          'age': new FormControl(''),
          'dept': new FormControl(''),
        }),
      ]),
    });
  }
}
