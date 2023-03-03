// Function to hide the rules
function showHide() {
    let rule = document.querySelector(".gameRules");
    let btn = document.getElementById("rulesBtn");
    
    if(rule.style.display === "block") {
        rule.style.display = "none";
        btn.innerHTML = "Show Rules";
    } else {
        rule.style.display = "block";
        btn.innerHTML = "Hide Rules"
        rule.classList.remove("hide");
    }
}
