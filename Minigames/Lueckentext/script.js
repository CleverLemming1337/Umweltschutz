function checkText() {
    answers = ["jeder", "schützen", "Licht", "Fenster", "Flugmodus", "Flugzeug", "tierische", "Second-Hand-Läden"];
    var correct = 0;
    for(var i=0; i<9; i++) {
        id="l"+String(i+1);
        if (document.getElementById(id).value == answers[i]) {
            document.getElementById(id).style="background-color: green;";
            correct++;
        }
        else {
            document.getElementById(id).style="background-color: red;";
        }
    }
}
function removeAlertInfo() {
	document.getElementById("alert_alert-info").setAttribute("hidden", null)
}