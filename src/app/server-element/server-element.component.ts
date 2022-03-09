import { Component, Input, OnInit, OnChanges, ViewEncapsulation, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked{
  // @Input() element!: {type:string, name:string, content:string}
  @Input('srvElement') element!: {type:string, name:string, content:string}
  // @Input() name:string ='';
  constructor() {
    console.log('constructor')
  }

  ngAfterContentInit(){
    console.log('ng after content on init')
  }

  ngOnInit(): void {
    console.log('ng onInIt')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  ngDoCheck(){
    console.log('ng docheck')
  }

  ngAfterContentChecked(){
    console.log('ng after content checked')
  }

}
