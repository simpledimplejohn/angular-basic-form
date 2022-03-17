import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {
  locations: string[] = ['Downtown', 'S. County', 'Lakeside'];
  constructor() { }

  ngOnInit(): void {
  }

}
