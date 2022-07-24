import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  toggledValue = true;
  toggled($event: any){
    console.log('admin', $event)
    this.toggledValue = $event;
  }
  ngOnInit(): void {
  }

}
