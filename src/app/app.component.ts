import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Animations} from '../assets/animations/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animations.componentAnimation,
    Animations.routeAnimations,
    Animations.sideBarAnimation,
    Animations.buttonAnimation
  ]
 
})
export class AppComponent {
  title = 'Portfolio';
  isActive:boolean=true;
  position:string="initial";
  
showSidebar(){
  this.position = this.position === 'initial' ? 'final' : 'initial';
}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}