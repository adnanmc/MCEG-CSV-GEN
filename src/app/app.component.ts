import { Component } from '@angular/core';
import { EventRow } from './models/event-row';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // event name
  eventName: string;

  allEvents: EventRow[];

  constructor(public eventService: EventService) {

  }

  // fix flight num if its 3 digit or less
  fixFlightNum(flight_number) {
    if (flight_number.length === 1) {
      flight_number = '000' + flight_number;
    } else if (flight_number.length === 2) {
      flight_number = '00' + flight_number;
    } else if (flight_number.length === 3) {
      flight_number = '0' + flight_number;
    }

    return flight_number;
  }
  // fix time if its 3 digit or less
  fixTime(time) {
    if (time.length === 1) {
      time = '000' + time;
    } else if (time.length === 2) {
      time = '00' + time;
    } else if (time.length === 3) {
      time = '0' + time;
    }

    return time;
  }

  // grabbing event name based on button click on child component
  grabEventName(name) {
    name = name.toString();
    this.eventName = name;
    // console.log(this.eventName);
  }

  addEvent(object: EventRow) {
    object.flight_number = this.fixFlightNum(object.flight_number);
    object.actual_out_time_utc = this.fixTime(object.actual_out_time_utc);
    object.actual_off_time_utc = this.fixTime(object.actual_off_time_utc);
    object.actual_on_time_utc = this.fixTime(object.actual_on_time_utc);
    object.actual_in_time_utc = this.fixTime(object.actual_in_time_utc);
    object.actual_eta_time_utc = this.fixTime(object.actual_eta_time_utc);
    object.actual_etd_time_utc = this.fixTime(object.actual_etd_time_utc);
    object.actual_eto_time_utc = this.fixTime(object.actual_eto_time_utc);
    object.actual_eon_time_utc = this.fixTime(object.actual_eon_time_utc);
    // console.log(object.flight_number);
    this.eventService.addEvent(object);
    // console.log(this.allEvents);

  }
}
