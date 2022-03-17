import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {
  locations: string[] = ['Downtown', 'S. County', 'Lakeside'];
  volunteerForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  initializeForm(): void {
    this.volunteerForm = this.fb.group({
      name: 'Name Here',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([
        this.fb.control('')
      ])
    })
  }
  onSubmit(): void {
    console.log(this.volunteerForm);
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number): void {
    this.references.removeAt(index);
  }

  // selectLocation(event: { target: { value: any; }; }): void {
  //   this.volunteerForm.patchValue({
  //     preferredLocation: event.target.value
  //   });
  // }



  // getter, not sure what this is?
  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }

}
