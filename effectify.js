

(function() {


  if (window.hasRun) {
    return;
  }

  let interval1; 
  let interval2;
  let interval3;
  window.hasRun = true;

  function effect1(effect_url){

    clearInterval(interval2);
    clearInterval(interval3);  

    document.body.style['background-color'] = "blue";

    function blinking_1() {
      interval1 = setInterval(function () { 
          blink_1();
        }, 300);
    }
    function blink_1() {
      document.body.style.border = "";
      setTimeout(function () {
        document.body.style.border = `solid 10px black`;
      }, 150);
    }
    blinking_1();
  }

  function effect2(effect_url){

    clearInterval(interval1);
    clearInterval(interval3);

    document.body.style['background-color'] = "red";

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

    clearInterval(interval1);
    clearInterval(interval2);

    document.body.style['background-color'] = "green";
    
    function blinking_3() {
        interval3 = setInterval(function () { 
          blink_3();
        }, 800);
      }
      function blink_3() {
        document.body.style.border = "";
        setTimeout(function () {
          document.body.style.border = "solid 15px white";
        }, 400);
      }
    blinking_3();
  
  }

  function clearall(){
    document.body.style['background-color'] = "white";
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
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