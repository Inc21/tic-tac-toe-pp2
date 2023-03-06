// Function to hide the rules
function showHide() {
    let rule = document.querySelector(".gameRules");
    let btn = document.getElementById("rulesBtn");
    let cont = document.getElementById("container");
    
    if(rule.style.display === "block") {
        rule.style.display = "none";
        btn.innerHTML = "Show Rules";
        cont.style.minHeight = "calc(100vh - 14.5rem)";
    } else {
        rule.style.display = "block";
        btn.innerHTML = "Hide Rules"
        rule.classList.remove("hide");
        cont.style.minHeight = "auto";
        // rule.style.marginTop = "-120px";
        // btn.style.margin = "-520px";
    }
}
