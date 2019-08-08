import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsLogicService {

  isActive:boolean=true;
  position:string="initial";
  public innerWidth: any;
  isDesktop=true;

  evaluateDeviceSize(){
      this.innerWidth = window.innerWidth;
      this.isDesktop = (this.innerWidth > 1000);
  }

  showSidebar(){
      this.position = this.position === 'initial' ? 'final' : 'initial';
  }

  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.isDesktop = (this.innerWidth > 1000)
  }

}
