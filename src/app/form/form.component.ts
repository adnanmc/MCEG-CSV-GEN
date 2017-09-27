import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventRow } from '../models/event-row';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // defining output event for all events
  @Output('eventAdded') eventAdded = new EventEmitter<EventRow>();

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

  // define ngModels for databinding
  event_type: string;
  flight_number: string;
  actual_out_time_utc: string;
  actual_off_time_utc: string;
  actual_on_time_utc: string;
  actual_in_time_utc: string;
  actual_eta_time_utc: string;
  actual_etd_time_utc: string;
  actual_eto_time_utc: string;
  actual_eon_time_utc: string;
  new_tail_number: string;


  resetBinding() {
    this.flight_number = null;
    this.actual_out_time_utc = null;
    this.actual_off_time_utc = null;
    this.actual_on_time_utc = null;
    this.actual_in_time_utc = null;
    this.actual_eta_time_utc = null;
    this.actual_etd_time_utc = null;
    this.actual_eto_time_utc = null;
    this.actual_eon_time_utc = null;
    this.new_tail_number = null;
  }


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
    this.resetBinding();
  }


  // out form submit
  submitOUT() {

    this.eventAdded.emit({
      event_type: 'OUT',
      flight_number: this.flight_number,
      actual_out_time_utc: this.actual_out_time_utc,
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // off event submit
  submitOFF() {

    this.eventAdded.emit({
      event_type: 'OFF',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: this.actual_off_time_utc,
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // on event submit
  submitON() {

    this.eventAdded.emit({
      event_type: 'ON',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: this.actual_on_time_utc,
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // in event submit
  submitIN() {

    this.eventAdded.emit({
      event_type: 'IN',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: this.actual_in_time_utc,
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // eta event submit
  submitETA() {

    this.eventAdded.emit({
      event_type: 'ETA',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: this.actual_eta_time_utc,
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // etd event submit
  submitETD() {

    this.eventAdded.emit({
      event_type: 'ETD',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: this.actual_etd_time_utc,
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // eto event submit
  submitETO() {

    this.eventAdded.emit({
      event_type: 'ETO',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: this.actual_eto_time_utc,
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // eon event submit
  submitEON() {

    this.eventAdded.emit({
      event_type: 'EON',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: this.actual_eon_time_utc,
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // sub event submit
  submitSUB() {

    this.eventAdded.emit({
      event_type: 'SUB',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: this.new_tail_number,
      test_result: ''
    });

    this.resetBinding();

  }

  // cnl event submit
  submitCNL() {

    this.eventAdded.emit({
      event_type: 'CNL',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }

  // del event submit
  submitDEL() {

    this.eventAdded.emit({
      event_type: 'DEL',
      flight_number: this.flight_number,
      actual_out_time_utc: '',
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: '',
      test_result: ''
    });

    this.resetBinding();

  }




}
