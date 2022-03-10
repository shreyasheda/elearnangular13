import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;

  constructor(private loggingService: LoggingService,
    private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logToConsole(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status)
  }

}
