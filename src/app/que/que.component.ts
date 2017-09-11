import { Component, OnInit } from '@angular/core';
import { EventRow } from '../models/event-row';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {

  allEvents: EventRow[];

  constructor(public eventService: EventService) { }

  ngOnInit() {
    this.allEvents = this.eventService.getEvents();

  }

  removeEvent(event: EventRow) {
    this.eventService.removeEvent(event);
  }

}
