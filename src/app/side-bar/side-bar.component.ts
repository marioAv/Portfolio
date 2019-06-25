import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition,state } from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('350ms', style({transform: 'translateX(-300px)', opacity: 0}))
        ]),
        transition(':enter', [
          style({transform: 'translateX(-300px)', opacity: 0}),
          animate('350ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
      ]
    ),

    trigger(
      'buttonAnimation', [
        state('initial', 
          style({
              left: '377px'
          })
        ),
        state('final', 
          style({
              left: '7px'
            }),
        ),
        transition('initial=>final', animate('400ms')),
        transition('final=>initial', animate('400ms'))
      ]
    )



  ],
})
export class SideBarComponent{
  showMenu:boolean=false;
  message:string= "Close";
  position:string="initial"
  
  
  showSidebar(){
    this.showMenu = !this.showMenu;
    this.message = "Open";
    this.position = this.position === 'initial' ? 'final' : 'initial';
  }
}
