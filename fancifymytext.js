function alertButton() {
  document.getElementById("textarea1").style.fontSize= "24pt";
}

function changeStyle() {
  alert("Fancify!");
  document.getElementById("textarea1").style.fontWeight="bold";
  document.getElementById("textarea1").style.color="blue";
  document.getElementById("textarea1").style.textDecoration="underline";
}

function fixStyle() {
  document.getElementById("textarea1").style.fontWeight="normal"
}

function moo() {
  var upper = document.getElementById("textarea1").value.toUpperCase();
  document.getElementById("textarea1").value = upper;
  var parts = upper.split(".");
  upper = parts.join("-Moo. ");
  document.getElementById("textarea1").value = upper;
}