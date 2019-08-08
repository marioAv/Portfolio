import { Component, OnInit } from '@angular/core';
import {Animations} from '../../assets/animations/animations';
import {AnimationsLogicService} from '../../Services/animations-logic.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations:[
    Animations.sideBarMobileAnimation,
    Animations.sideBarAnimation,
    Animations.buttonAnimation,
    Animations.buttonMobileAnimation
  ]
})
export class SideBarComponent{
  constructor(private animationLogic:AnimationsLogicService ){

  }

  showSidebar(){
    this.animationLogic.showSidebar()
  }

  
}
