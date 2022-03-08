import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCStatus = 'no server created'
  // serverName = 'test server name'
  serverName = 'test server name'
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 5000);
   }

  ngOnInit(): void {

  }

  onButtonClick(){
    this.serverCStatus = `server create `+this.serverName
  }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
