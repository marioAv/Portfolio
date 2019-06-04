import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent{
  showMenu:boolean=false;
  
  
  showSidebar(){
    this.showMenu = !this.showMenu;
  }
}
