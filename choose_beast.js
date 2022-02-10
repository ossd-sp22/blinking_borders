
   const effect1 = `body { background-color: blue }`;
   const effect2 = `body { background-color: red }`;
   const removecss = `body { background-color: None,
                             border: None }`;

function listenForClicks() {
  document.addEventListener("click", (e) => {

    function effect_1(tabs) {
      browser.tabs.insertCSS({code: removecss}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "remove",
          code: "remove"
        });
      });
      browser.tabs.insertCSS({code: effect1}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          action: "effect_change_1",
          code: "effect_1"
        });
      });
    }

    function effect(tabs){
      browser.tabs.insertCSS({code: effect2}).then(() => {
        browser.tabs.sendMessage(tabs[0].id,{
          action: "effect_change_2",
          code : "effect_2"
        })
      })
    }


    function reset(tabs) {
      browser.tabs.removeCSS({code: effect1}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          action: "reset",
        });
      });
      browser.tabs.removeCSS({code: effect2}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          action: "reset",
        });
      });
    }

    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

 
    if (e.target.classList.contains("effect_1")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(effect_1)
        .catch(reportError);
    }
    else if (e.target.classList.contains("effect")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(effect)
        .catch(reportError);
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
    }
  });
}

function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}


browser.tabs.executeScript({file: "/beastify.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
