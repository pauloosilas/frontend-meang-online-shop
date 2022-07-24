import { ForwardRefHandling } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggledValue = true;
  @Output() toggledChange = new EventEmitter<boolean>();
  
  constructor() { }

  toggled(){
    if(this.toggledValue === undefined){
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
    console.log(this.toggledValue);
    this.toggledChange.emit(this.toggledValue);
  }




  ngOnInit(): void {
  }

}
