import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreated = false;
  serverCStatus = 'no server created'
  // serverName = 'test server name'
  servers = ['testserver 1', 'testserver 2']
  serverName = 'test server name'
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 5000);
   }

  ngOnInit(): void {

  }

  onButtonClick(){
    this.serverCreated = true;
    this.serverCStatus = `server create `+this.serverName
  }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
