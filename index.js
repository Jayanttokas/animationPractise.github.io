var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".name"
})
.setClassToggle(".name", 'h1')
.addTo(controller)
