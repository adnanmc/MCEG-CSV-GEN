import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
// defining all the available events
events: any = ['out', 'off', 'on', 'in', 'eta', 'etd', 'eto', 'eon', 'sub', 'cnl', 'del'];

// creating a custom event which will tell the parent component whats the name of the button that was clicked
@Output() eventTypeClick: EventEmitter<string> = new EventEmitter<string>();

// function that handles the event emit
whichEvent(event) {
  event = event.toUpperCase();
  this.eventTypeClick.emit(event);
}





}
