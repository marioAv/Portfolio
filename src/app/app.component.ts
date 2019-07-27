import { Component } from '@angular/core';
import { trigger, style, animate, transition,state,query,animateChild,group } from '@angular/animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[

    // SIDEBAR ANIMATIONS
    trigger(
      'sideBarAnimation', [
        state('initial', 
          style({
              transform: 'translate(0px)',
          })
        ),
        state('final', 
          style({
              transform: 'translate(-330px)',
            }),
        ),
        transition('initial=>final', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')),
        transition('final=>initial', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'))
      ]
    ),

    trigger(
      'componentAnimation', [
        state('initial', 
          style({
              marginLeft: '21%',
              width: '79%'
          })
        ),
        state('final', 
          style({
              marginLeft: '0px',
              width:'100%'
            }),
        ),
        transition('initial=>final', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')),
        transition('final=>initial', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'))
      ]
    ),
  
      trigger(
        'buttonAnimation', [
          state('initial', 
            style({
                left: '330px'
            })
          ),
          state('final', 
            style({
                left: '0px'
              }),
          ),
          transition('initial=>final', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')),
          transition('final=>initial', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'))
        ]
      ),


        // NEXT COMPONENT ANIMATION
        trigger('routeAnimations', [

          transition('home => *, about => portfolio , portfolio => resume, resume => contact', [

              style({ position: 'relative' }),

              query(':enter, :leave', [
                    style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                    })
              ]),

              query(':enter', [
                    style({ 
                    right: '-100%'
                    })
              ]),

              query(':leave', animateChild()),
              group([
                
              query(':leave', [
                animate('700ms cubic-bezier(.35,0,.25,1)', style({ right: '100%'}))
              ]),
              query(':enter', [
                animate('700ms cubic-bezier(.35,0,.25,1)', style({ right: '0%'}))
              ])
            ]),
            query(':enter', animateChild()),
          ]),


      //PREVIOUS COMPONENT ANIMATION
      transition('contact => * , resume => *, porfolio => *, portfolio => *,  about => *', [

        style({ position: 'relative' }),

        query(':enter, :leave', [
              style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%'
              })
        ]),

        query(':enter', [
              style({ 
              left: '-100%'
              })
        ]),

        query(':leave', animateChild()),
        group([
          
        query(':leave', [
          animate('700ms cubic-bezier(.35,0,.25,1)', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('700ms cubic-bezier(.35,0,.25,1)', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
    ])
  
  ]
})
export class AppComponent {
  title = 'Portfolio';
  // showMenu:boolean=true;
  position:string="initial";
  isActive:boolean=true;
  
  
  showSidebar(){
    // this.showMenu = !this.showMenu;
    this.position = this.position === 'initial' ? 'final' : 'initial';
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
