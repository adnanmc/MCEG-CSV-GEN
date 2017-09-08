import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // event name
  eventName: string;

  // grabbing event name based on button click on child component
  grabEventName(name) {
    name = name.toString();
    this.eventName = name;
    console.log(this.eventName);
  }
}
