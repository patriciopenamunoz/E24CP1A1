document.addEventListener("turbolinks:load", () => {
  applyColors();
  $(".dial").knob({
    release : () => { applyColors() },
    change  : () => { applyColors() }
  });

  function applyColors() {
    let colors = {
      red   : $("#red").val(),
      green : $("#green").val(),
      blue  : $("#blue").val()
    }
    let style = `rgb(${colors['red']},${colors['green']},${colors['blue']})`
    $("#rgb").html(style);
    $("#color-shower").css('background-color', style);
  }

});
