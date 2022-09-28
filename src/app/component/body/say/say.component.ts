import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.scss']
})
export class SayComponent implements OnInit {
  @Input() color:any;
  constructor() { }

  ngOnInit(): void {
  }

}
