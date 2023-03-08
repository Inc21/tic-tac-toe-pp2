// Function to hide the rules
function showHide() {
  const rule = document.querySelector(".gameRules");
  const btn = document.getElementById("rulesBtn");
  const cont = document.getElementById("container");

  if (rule.style.display === "block") {
    rule.style.display = "none";
    btn.innerHTML = "Show Rules";
    cont.style.minHeight = "calc(100vh - 14.5rem)";
  } else {
    rule.style.display = "block";
    btn.innerHTML = "Hide Rules";
    rule.classList.remove("hide");
  }
}
