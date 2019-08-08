import { Component } from '@angular/core';
import {Animations} from '../assets/animations/animations';
import {AnimationsLogicService} from '../Services/animations-logic.service';
import {RouterOutlet} from '@angular/router';
import {HostListener} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animations.componentAnimation,
    Animations.componentMobileAnimation,
    Animations.routeAnimations
  ]
 
})
export class AppComponent {
 
  constructor(public animationLogic:AnimationsLogicService){
    
  }

  ngOnInit(){
    this.animationLogic.evaluateDeviceSize();
  }

  showSidebar(){
    this.animationLogic.showSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onchange(){
    this.animationLogic.onResize(event);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  // @HostListener('window:resize', ['$event'])

}

