function createDelivery(driver){
  return new Promise(resolve => {
      $("#user")[0].value = driver.href.split("/")[4];
      $("#submit_btn")[0].dispatchEvent(new MouseEvent("click", {ctrlKey: true}))
      resolve();
  })
}

function Wait() {
    return new Promise(r => setTimeout(r, 50))
}

var newScript = document.createElement('script');
newScript.innerHTML='$("body").off("submit");';
document.head.appendChild(newScript);
drivers = $("div[id=drivers]")[0].querySelectorAll("a");
let chain = Promise.resolve();
for (let driver of drivers) {
    chain = chain.then(()=>createDelivery(driver))
            .then(Wait)
}
chain.then(() => location.reload());
