import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FormComponent } from './form/form.component';
import { QueComponent } from './que/que.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FormComponent,
    QueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule.forRoot(),
    PapaParseModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
