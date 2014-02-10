window.onload = function() {
  
  document.getElementById("bHelp").addEventListener("click", function() {
    window.close();
  }, true);
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
   
    switch (key) {
      case 27:
        window.close();
        break;
      default:
    }
}