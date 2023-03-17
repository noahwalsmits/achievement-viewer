import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  error: any;
  echo: string | undefined;
  databaseResponse: any = undefined;
  messageToEcho: string = "goodbye!";

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  clear() {
    this.error = undefined;
    this.echo = undefined;
    this.databaseResponse = undefined;
  }

  postEcho(echo: string) {
    this.backendService.postEcho(echo)
      .subscribe({
        next: (data: string) => this.echo = data,
        error: error => this.error = error
      });
  }

  tryGet() {
    this.backendService.tryGet()
      .subscribe({
        next: (data) => this.databaseResponse = data,
        error: error => this.error = error
      });
  }

}
