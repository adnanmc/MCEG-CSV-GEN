import { Component, OnInit } from '@angular/core';
import { EventRow } from './models/event-row';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // event name
  eventName: string;

  allEvents: EventRow[];

  constructor(public eventService: EventService) {

  }

  ngOnInit() {
    this.allEvents = this.eventService.getEvents();

  }

  // grabbing event name based on button click on child component
  grabEventName(name) {
    name = name.toString();
    this.eventName = name;
    // console.log(this.eventName);
  }

  addOutEvent(object: EventRow) {
    console.log(object);
    this.eventService.addEvent(object);
    console.log(this.allEvents);

  }
}
