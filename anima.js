AFRAME.registerComponent('moving', {
init: function() {
let el = this.el;
this.animateMoving = function(e) {
let curPosition = el.getAttribute('position');
let params = {
property: 'position',
to: {
x: curPosition.x - 5,
y: curPosition.y,
z: curPosition.z
},
dur: 5000,
easing: 'easeInOutElastic'
};
el.setAttribute('animation', params);
}
this.el.addEventListener('click', this.animateMoving);
},
remove: function() {
this.el.removeEventListener('click', this.animateMoving);
}