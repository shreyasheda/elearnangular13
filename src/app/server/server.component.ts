import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId:number = 12;
  serverState:string = 'offline';

  getColor(){
    return this.serverState === 'online' ? 'green' : 'red'
  }
}
