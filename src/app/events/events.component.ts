import { Component, Output, EventEmitter } from '@angular/core';

  @Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
  })
  export class EventsComponent {
  eventName: string;
  // defining all the available events
  events: any = [
    {
      type: 'out',
      active: false
    },
    {
      type: 'off',
      active: false
    },
    {
      type: 'on',
      active: false
    },
    {
      type: 'in',
      active: false
    },
    {
      type: 'eta',
      active: false
    },
    {
      type: 'etd',
      active: false
    },
    {
      type: 'eto',
      active: false
    },
    {
      type: 'eon',
      active: false
    },
    {
      type: 'sub',
      active: false
    },
    {
      type: 'cnl',
      active: false
    },
    {
      type: 'del',
      active: false
    }
  ];

  // creating a custom event which will tell the parent component whats the name of the button that was clicked
  @Output() eventTypeClick: EventEmitter<string> = new EventEmitter<string>();

  // function that handles the event emit
  whichEvent(event) {
    this.eventName = event.type;
    this.events.forEach((e) => {
      if (e.type === event.type) {
        e.active = true;
      } else {
        e.active = false;
      }
    });
    this.eventName = this.eventName.toUpperCase();
    this.eventTypeClick.emit(this.eventName);
  }





}
