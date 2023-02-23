// Function to hide the rules
function showHide() {
    let rule = document.getElementById("gameRules");
    let btn = document.getElementById("rulesBtn");
    
    if(rule.style.display === "none") {
        rule.style.display = "block";
        btn.innerHTML = "Hide Rules";
    } else {
        rule.style.display = "none";
        btn.innerHTML = "Show Rules"
    }
}
