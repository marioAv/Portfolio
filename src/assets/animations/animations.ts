import { trigger, style, animation, animate, transition,state,query,animateChild,group,keyframes } from '@angular/animations';


export const Animations = {
    
    sideBarAnimation:trigger(
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

      sideBarMobileAnimation:trigger(
        'sideBarMobileAnimation', [
          state('initial', 
            style({
                transform: 'translate(-330px)',
            })
          ),
          state('final', 
            style({
                transform: 'translate( 0px)',
              }),
          ),
          transition('initial=>final', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')),
          transition('final=>initial', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'))
        ]
      ),

      buttonAnimation:trigger(
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

      buttonMobileAnimation:trigger(
        'buttonMobileAnimation', [
          state('initial', 
            style({
                left: '0px'
            })
          ),
          state('final', 
            style({
                left: '295px'
              }),
          ),
          transition('initial=>final', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')),
          transition('final=>initial', animate('300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'))
        ]
      ),

      componentAnimation:trigger(
            'componentAnimation', [
              state('initial', 
                style({
                    marginLeft: '300px'
                })
              ),
              state('final', 
                style({
                    marginLeft: '0px'
                  }),
              ),
              transition('initial=>final', animate('350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')),
              transition('final=>initial', animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'))
            ]
          ),

        componentMobileAnimation:trigger(
            'componentMobileAnimation', [
              state('initial', 
                style({
                    marginLeft: '0px'
                })
              ),
              state('final', 
                style({
                    marginLeft: '300px'
                  }),
              ),
              transition('initial=>final', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')),
              transition('final=>initial', animate('400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'))
            ]
          ),

      routeAnimations:trigger(
            'routeAnimations', [

            //NEXT COMPONENT ANIMATION    
            transition('home => *, about => portfolio , portfolio => resume, resume => contact',
             [
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

}