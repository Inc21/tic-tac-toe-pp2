// Function to hide the rules
function showHide() {
    let rule = document.getElementById("gameRules");
    let btn = document.getElementById("rulesBtn");
    
    if(rule.style.visibility === "hidden") {
        rule.style.visibility = "visible";
        btn.innerHTML = "Hide Rules";
    } else {
        rule.style.visibility = "hidden";
        btn.innerHTML = "Show Rules"
    }
}
