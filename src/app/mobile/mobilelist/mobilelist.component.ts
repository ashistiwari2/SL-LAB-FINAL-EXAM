import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/mobile.service';

@Component({
  selector: 'app-mobilelist',
  templateUrl: './mobilelist.component.html',
  styleUrls: ['./mobilelist.component.css']
})
export class MobilelistComponent implements OnInit {

  mobileList=[];
  constructor(private mobileusage:MobileService){}

  ngOnInit(): void {
    this.mobileusage.getTodo();
    this.mobileusage.getTodoUpdateListener().subscribe(data => {
      this.mobileList = data;
  })
}
onDelete(id){
  this.mobileusage.delete(id);
}

}
