AFRAME.registerComponent('change-color', {
    init: function () {
      // Do something when component first attached.
      let elementEntity = this.el;
      this.changeColor = function(){
        elementEntity.setAttribute('color', 'green');
      }
      elementEntity.addEventListener('click', this.changeColor);
    },
    remove: function () {
      // Do something when the component or its entity is detached.
      this.el.removeEventListener('click', this.changeColor);
    }
});


AFRAME.registerComponent('ball-drop', {
    init: function () {
      let elementEntity = this.el;
      this.ballDrop = function(){
        let curPosition = elementEntity.getAttribute('position');
        let params = {
            property: 'position',
                to: {
                    x: curPosition.x,
                    y: -21,
                    z: curPosition.z
                },
            dur: 5000,
            easing: 'easeOutExpo' //https://aframe.io/docs/1.3.0/components/animation.html#easings
        };
        elementEntity.setAttribute('animation', params);
      }
      elementEntity.addEventListener('click', this.ballDrop);

    },

    remove: function () {
      this.el.removeEventListener('click', this.ballDrop);
    }
});


AFRAME.registerComponent('spin-object', {
    init: function () {
      let elementEntity = this.el;
      
      this.spinner = function(){
        let params = {
            property: 'rotation',
            to: {
                x: 0,
                y: 360,
                z: 0
            },
            dur: 5000,
            easing: 'linear',
            loop: true
        };

        elementEntity.setAttribute('animation', params);
      }
      elementEntity.addEventListener('click', this.spinner);

    },
    remove: function () {
      this.el.removeEventListener('click', this.spinner);
    }
});


// AFRAME.registerComponent('take-off', {
//     init: function () {
//       let elementEntity = this.el;
//       let curPosition = elementEntity.getAttribute('position');

//       this.takeOff = function(){
//         let params = {
//             property: 'position',
//             to: {
//                 x: curPosition.x,
//                 y: curPosition.y + 535,
//                 z: curPosition.z
//             },
//             delay:2000,
//             dur: 10000,
//             dir: 'normal',
//             easing: 'easeInOutSine',
//             loop: false
//         };

//         elementEntity.setAttribute('animation', params);
//       }.bind(this);
//       elementEntity.addEventListener('click', this.takeOff);

//     },
//     remove: function () {
//       this.el.removeEventListener('click', this.takeOff);
//     }
// });