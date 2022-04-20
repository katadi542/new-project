
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { GreetingModule } from './greeting/greeting.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    GreetingModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule,
    EmployeeModule
  ],
  declarations: [
    AppComponent,
    EmpolyeeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
