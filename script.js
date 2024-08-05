new URLSearchParams(window.location.search).forEach((value, key) => {
  if (key === "winter") document.getElementById(key).innerHTML = "Winter";
  else if (key === "summer")
    document.getElementById(key).innerHTML = "Summer";
  else document.getElementById(key).innerHTML = value;
});
