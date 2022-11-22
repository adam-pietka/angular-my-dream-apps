import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import {Warming_alertComponent} from "./warming_alert/warming_alert.component";
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {FormsModule} from "@angular/forms";
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';


@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        Warming_alertComponent,
        SuccessAlertComponent,
        PracticeDirectivesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
