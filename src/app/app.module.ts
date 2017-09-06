import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FormComponent } from './form/form.component';
import { QueComponent } from './que/que.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FormComponent,
    QueComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
