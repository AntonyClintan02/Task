import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/service/color-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  color:any;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    document.getElementById("slider").style.background = `linear-gradient(to right,white 50%,#ffee00 50%)`
    document.getElementById("body").style.background = `linear-gradient(to right,white 50%,#ffee00 50% )`
    this.colorService.color.subscribe(color=>{
      this.color = color
      console.log(color)
      this.colorChange()
    })
  }

  colorChange(){
    document.getElementById("slider").style.background = `linear-gradient(to right,white 50%, ${this.color} 50%)`
    document.getElementById("body").style.background = `linear-gradient(to right,white 50%, ${this.color} 50%)`
  }

}
