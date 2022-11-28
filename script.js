function sendIdea() {
	a = document.getElementById("Name").value;
	b = document.getElementById("Idea").value;
	if(b.length < 1){
		document.getElementById("alert_alert-danger").removeAttribute("hidden")
		return
	}
}
function removeAlertDanger() {
	document.getElementById("alert_alert-danger").setAttribute("hidden", null)
}
function removeAlertSuccess() {
	document.getElementById("alert_alert-success").setAttribute("hidden", null)
}