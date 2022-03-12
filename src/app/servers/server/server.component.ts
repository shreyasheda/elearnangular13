import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: any;

  constructor(private serversService: ServersService,
    private activateRoute : ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activateRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server']
      })
    // const id = +this.activateRoute.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.activateRoute.params.subscribe(
    //   (params : Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )
  }

  onEdit(){
    this.router.navigate(['edit'], { relativeTo: this.activateRoute, queryParamsHandling: 'preserve'})
  }

}
