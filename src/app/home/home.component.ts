import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscribe!: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.firstSubscribe = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObserval = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() =>{
        if(count === 5)
          observer.complete();
        if(count > 5)
          observer.error(new Error('count greater then 5!'));
        observer.next(count);
        count++;
      }, 1000);
    });

    customIntervalObserval.pipe(map((data:number) => {
      return `Round: ${data+1}`;
    }))

    this.firstSubscribe = customIntervalObserval.pipe(filter((data:any) => {
      return data > 0;
    }),map((data:number) => {
      return `Round: ${data+1}`;
    })).subscribe((data:any) => {
      console.log(data);
    }, (error:any) => {
      console.log(error)
    }, () => {
      console.log('observable completed!!!');
    });
  }

  ngOnDestroy(): void {
    this.firstSubscribe.unsubscribe();
  }

}
