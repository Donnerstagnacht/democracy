var swipe = false;
$('.toast-swipe-mich').hover(function() {
  if(!swipe) {
    M.toast({html: 'Swipe mich nach rechts'});
    swipe = true;
  }
});
var click = false
$('.toast-klick-mich').hover(function() {
  if(!click) {
    M.toast({html: 'Klick mich'});
    click = true;
  }
});