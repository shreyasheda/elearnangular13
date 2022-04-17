import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService){}

  isShow:boolean = false;
  private activatedSub!: Subscription;

  title = 'my-first-app';
  loadedFeature = 'recipe';

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe((data) => {
      this.isShow = data;
    })
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe()
  }
}
