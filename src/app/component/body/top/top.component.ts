import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  @Input() color:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
