

(function() {


  if (window.hasRun) {
    return;
  }

  let flag; 
  let interval;
  window.hasRun = true;

  function effect1(effect_url){

    function blinking_1() {
        interval = setInterval(function () { 
          blink_1();
        }, 500);
      }
      function blink_1() {
        document.body.style.border = "";
        flag = setTimeout(function () {
          document.body.style.border = `solid 10px black`;
        }, 250);
      }
    blinking_1(10, "black", 500);
  }

  function effect2(effect_url){
    document.body.style.border = "";
  }

  function resetBackground(){

    document.body.style['background-color'] = "";
    //document.body.style.border = "";
    //clearTimeout(flag);
    clearInterval(interval);
    // function blinking_2() {
    //     setInterval(function () { 
    //       blink_2();
    //     }, 1000);
    //   }
    //   function blink_2() {
    //     document.body.style.border = "";
    //     setTimeout(function () {
    //       document.body.style.border = "solid 10px black";
    //     }, 500);
    //   }
    // blinking_2();
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
