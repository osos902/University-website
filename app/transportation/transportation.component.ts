import { Component } from '@angular/core';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent {
  schedules = [
    {
      departure: "New York",
      arrival: "Los Angeles",
      date: "05/01/2023",
      time: "08:00 AM"
    },
    {
      departure: "Chicago",
      arrival: "Dallas",
      date: "05/02/2023",
      time: "10:00 AM"
    },
    {
      departure: "San Francisco",
      arrival: "Seattle",
      date: "05/03/2023",
      time: "12:00 PM"
    },
    {
      departure: "Boston",
      arrival: "Washington D.C.",
      date: "05/04/2023",
      time: "02:00 PM"
    }
  ];
}
