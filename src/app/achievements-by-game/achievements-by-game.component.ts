import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-achievements-by-game',
  templateUrl: './achievements-by-game.component.html',
  styleUrls: ['./achievements-by-game.component.css']
})
export class AchievementsByGameComponent implements OnInit {
  searchForm = this.formBuilder.group({appId: '' });
  errorMessage?: string;

  constructor(private backendService: BackendService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorMessage = undefined;
    let appId: number = Number(this.searchForm.value.appId)
    if(isNaN(appId) || this.searchForm.value.appId.length === 0) {
      this.errorMessage = 'app id must be a number';
      return;
    }
    //TODO make request to backend
  }

}
