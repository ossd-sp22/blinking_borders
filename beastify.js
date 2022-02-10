

(function() {


  if (window.hasRun) {
    return;
  }
  window.hasRun = true;


  function effect1(effect_url){
    if (effect_url == "effect_1"){
      // document.body.style.border = "";
      // document.body.style['background-color'] = "blue";
    }
    else if (effect_url == "effect_2"){
      // document.body.style.border = "";
      // document.body.style['background-color'] = "red";
    }
    else if (effect_url == "effect_3"){
      document.body.style.border = "";
      document.body.style['background-color'] = "green";
    }
  }

  function effect(effect_url){
    document.body.style.border = "";
  }


  function resetBackground(){

    document.body.style['background-color'] = "";
    function startBlinking() {
        setInterval(function () { 
          blink();
        }, 1000);
      }
      function blink() {
        document.body.style.border = "";
        setTimeout(function () {
          document.body.style.border = "solid 10px black";
        }, 500);
      }
    startBlinking();
  }

  
  browser.runtime.onMessage.addListener((message) => {
    if (message.action === "effect_change_1") {
      effect1(message.code);
    } else if (message.action === "effect_change_2"){
      effect(message.code);
    } else if (message.action === "reset") {
      resetBackground();
    } else if (message.action === "remove"){
      remove();
    }
  });

})();
