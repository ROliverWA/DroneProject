import {
  trigger,
  transition,
  style,
  state,
  query,
  group,
  animateChild,
  animate,
  animation,
  stagger,
  keyframes,
} from '@angular/animations';

export const healthMeter = trigger('healthMeter', [
  state('10',
    style({
      width: '*',
      backgroundColor: 'rgba(172, 255, 47, 0.85)'
    })
  ),
  state('9',
    style({
      width: '450px',
      backgroundColor: 'rgba(0, 128, 0, 0.85)'
    })
  ),
  state('8',
    style({
      width: '400px',
      backgroundColor: 'rgba(0, 128, 0, 0.85)'
    })
  ),
  state('7',
    style({
      width: '350px',
      backgroundColor: 'rgba(255, 0, 0, 0.85)'
    })
  ),
  state('6',
    style({
      width: '300px',
      backgroundColor: 'rgba(255, 0, 0, 0.85)'
    })
  ),
  state('5',
    style({
      width: '250px',
      backgroundColor: 'rgba(255, 0, 0, 0.85)'
    })
  ),
  state('4',
    style({
      width: '200px',
      backgroundColor: 'rgba(255, 0, 0, 0.85)'
    })
  ),
  state('3',
    style({
      width: '150px',
      backgroundColor: 'rgba(139, 0, 0, 0.85)'
    })
  ),
  state('2',
    style({
      width: '100px',
      backgroundColor: 'rgba(139, 0, 0, 0.85)'
    })
  ),
  state('1',
    style({
      width: '50px',
      backgroundColor: 'rgba(139, 0, 0, 0.85)'
    })
  ),
  state('0',
    style({
      width: '0px',
      backgroundColor: 'rgba(139, 0, 0, 0.85)'
    })
  ),
  transition('* => *',
    animate('600ms ease-out')
  )
]);






// export const fade = trigger('fade', [
//   transition('void => *', [
//     style({
//       opacity: 0
//     }),
//     animate(2000)
//   ])
// ]);

export let ghost = trigger('ghost', [
  state('void',
    style({
      // width: '130px',
      opacity: 0
    })
  ),
  transition(':enter, :leave', [
    animate('500ms ease-out')
  ])
]);

// export const health = trigger('health', [
//   transition(':enter', [
//     animate('1000ms ease-out',
//       style({
//         width: 450
//       })
//     )
//   ])
// ]);

// export const health = animation(
//   animate(2000,
//     style({
//       width: '450px'
//     }),
//   )
// );





  // trigger('routeAnimations', [
  //   transition('* <=> *', [
  //     query(':enter, :leave', [
  //       style({
  //         position: 'absolute',
  //         left: 0,
  //         width: '100%',
  //         opacity: 0,
  //         transform: 'scale(0) translateY(100%)'
  //       }),
  //     ]),
  //     query(':enter', [
  //       animate('600ms ease',
  //         style({ opacity: 1,
  //           transform: 'scale(1) translateY(0)'
  //         }),
  //       ),
  //     ])
  //   ]),
  // ]);
