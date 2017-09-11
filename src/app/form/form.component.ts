import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventRow } from '../models/event-row';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() eventName: string;

  @Output('OutAdded') OutAdded = new EventEmitter<EventRow>();

  eName: string;
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


  submitOut() {
    this.OutAdded.emit({
      eName: 'OUT',
      flight_number: this.flight_number,
      actual_out_time_utc: this.actual_out_time_utc,
      actual_off_time_utc: '',
      actual_on_time_utc: '',
      actual_in_time_utc: '',
      actual_eta_time_utc: '',
      actual_etd_time_utc: '',
      actual_eto_time_utc: '',
      actual_eon_time_utc: '',
      new_tail_number: ''
    });

    this.flight_number = null;
    this.actual_out_time_utc = null;

  }


}
