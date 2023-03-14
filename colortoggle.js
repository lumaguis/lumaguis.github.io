AFRAME.registerComponent('color-toggle', {
    init: function() {
        let el = this.el;
        this.toggleColor = function() {
        el.setAttribute('color', 'purple');
        }
        this.el.addEventListener('click', this.toggleColor);
        },