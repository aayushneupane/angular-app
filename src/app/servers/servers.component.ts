import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  userName = '';
  isResetButtonDisabled = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    console.log(this.serverName.length);
    if (this.serverName.length == 0){
      this.serverCreationStatus = "Please enter a server name";
    } else {
      this.serverCreationStatus = 'Server was created. Name: ' + this.serverName;
    }
    console.log('oncreateserver');
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName(event: any) {
    if (this.userName.length > 0) {
      this.userName = '';
    }

  }


}
