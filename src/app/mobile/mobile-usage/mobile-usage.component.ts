import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/mobile.service';

@Component({
  selector: 'app-mobile-usage',
  templateUrl: './mobile-usage.component.html',
  styleUrls: ['./mobile-usage.component.css']
})
export class MobileUsageComponent implements OnInit {
  detail:'';
  username:'';
  total_time:'';
  date:'';
  mood:'';
  constructor(private Mobileservice:MobileService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.Mobileservice.submit(this.detail);
    this.username = '';
    this.total_time = '';
    this.date='';
    this.mood='';
  }
}
