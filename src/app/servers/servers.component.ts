import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // general selector
  // selector: '[app-servers]',  // selector as attribute .
  // selector: '.app-servers',     // selector as class .
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serversCreation = 'No server was created!';
  serverName = 'Test server name';
  newName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serversCreation = 'Servew was created. New server name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }







  // onUpdateNewUserName(updateNewName: any) {
  //   if (updateNewName.target.value.size > 0) {
  //     // this.allowNewName = true;
  //   }
  //
  // }

}
