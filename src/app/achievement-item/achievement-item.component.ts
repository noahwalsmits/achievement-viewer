import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement-item',
  templateUrl: './achievement-item.component.html',
  styleUrls: ['./achievement-item.component.css']
})
export class AchievementItemComponent implements OnInit {
  name: string = "name";
  description: string = "description";
  percentage: number = 0.0;
  iconUrl: string = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/440/76d157b886b182ad5d4e6087b40371b9ede81e29.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
