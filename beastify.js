

(function() {


  if (window.hasRun) {
    return;
  }

  let interval1; 
  let interval2;
  window.hasRun = true;

  function effect1(effect_url){

    clearInterval(interval2);

    function blinking_1() {
      
      interval1 = setInterval(function () { 
          blink_1();
        }, 500);
      }
      function blink_1() {
        document.body.style.border = "";
        setTimeout(function () {
          document.body.style.border = `solid 10px black`;
        }, 250);
      }
    blinking_1(10, "black", 500);
  }

  function effect2(effect_url){
    clearInterval(interval1);

    function blinking_2() {
        interval2 = setInterval(function () { 
          blink_2();
        }, 1000);
      }
      function blink_2() {
        document.body.style.border = "";
        setTimeout(function () {
          document.body.style.border = "solid 5px orange";
        }, 500);
      }
    blinking_2();

  }

  function effect3(){

    document.body.style['background-color'] = "";
    //document.body.style.border = "";
    //clearTimeout(flag);
    clearInterval(interval1);
  
  }

  function clearall(){
    clearInterval(interval1);
    clearInterval(interval2);
  }

  
  browser.runtime.onMessage.addListener((message) => {
    if (message.action === "effect_change_1") {
      effect1(message.code);
    } 
    else if (message.action === "effect_change_2"){
      effect2(message.code);
    } 
    else if (message.action === "effect_change_3") {
      effect3();
    } 
    else if (message.action === "reset"){
      clearall();
    }
  });

})();
