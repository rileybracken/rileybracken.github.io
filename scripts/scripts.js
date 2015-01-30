function fitHeight(el) {
  var isDesktop = window.isDesktop;
  var _el = (el.constructor === String) ? el : '.full-height';
  var heightFunc = function(){
    if(window.innerHeight >= 1200) {
      return 1200;
    }
    else {
      return window.innerHeight;
    }
  };

  return jQuery(_el).height(heightFunc);
}

$(document).ready(function() {
  fitHeight('.full-height');
});
