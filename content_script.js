var newScript = document.createElement('script');
newScript.innerHTML='$("body").off("submit");';
document.head.appendChild(newScript);
drivers = $("div[id=drivers]")[0].querySelectorAll("a");
drivers_map = {}
for (var i = 0; i < drivers.length; i++) {
  $("#user")[0].value = drivers[i].href.split("/")[4];
  $("#submit_btn")[0].dispatchEvent(new MouseEvent("click", {ctrlKey: true}))
}
location.reload();
