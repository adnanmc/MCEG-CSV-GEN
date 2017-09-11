import { Injectable } from '@angular/core';
import { EventRow } from '../models/event-row';


@Injectable()
export class EventService {

  constructor() { }
  allEvents: EventRow[];

  // get events from locall storage
  getEvents() {
    if (localStorage.getItem('allEvents') === null) {
      this.allEvents = [];
    } else {
      this.allEvents = JSON.parse(localStorage.getItem('allEvents'));
    }
    return this.allEvents;
  }

  // add event to local storage
  addEvent(eventRow: EventRow) {
    this.allEvents.unshift(eventRow);

    let allEvents;

    if (localStorage.getItem('allEvents') === null) {
      allEvents = [];
      // push new event
      allEvents.unshift(eventRow);
      // set new array to localstorage
      localStorage.setItem('allEvents', JSON.stringify(allEvents));
    } else {
      allEvents = JSON.parse(localStorage.getItem('allEvents'));
      // add new event
      allEvents.unshift(eventRow);
      // re set local storage
      localStorage.setItem('allEvents', JSON.stringify(allEvents));
    }

  }

  // remove individual event from local storage
  removeEvent(eventRow: EventRow) {
    for (let index = 0; index < this.allEvents.length; index++) {
      if (eventRow === this.allEvents[index]) {
        this.allEvents.splice(index, 1);
        localStorage.setItem('questions', JSON.stringify(this.allEvents));

      }

    }
  }

}
