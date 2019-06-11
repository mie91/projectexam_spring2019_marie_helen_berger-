/////FORM VALIDATION ON THE CONTACT PAGE///////

function validateForm() {
	var inputName = document.getElementById("inputName").value;
	var email = document.getElementById("emailInput").value;
	var emailVal = /^[a-zA-Z0-9-_+%.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])$/;
	var textInput = document.getElementById("textInput").value;

	if (inputName === "") {
		document.getElementById("notification").innerHTML = "Please enter a name.";
		document.getElementById("inputName").focus();
		return false;
	}
	if (emailVal.test(email) == false) {
		document.getElementById("notification").innerHTML = "Please insert a valid email address.";
		document.getElementById("emailInput").focus();
		return false;
	}
	
	if (textInput === "") {
		document.getElementById("notification").innerHTML = "Please enter a text.";
		document.getElementById("textInput").focus();
		return false;
	}

	if (confirm("Are you sure you want to submit?")) {
		return true;
	} else {
		return false;
	}
	return true;
};



/////////////COLLAPSIBLE DIVS////////////
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var collapseContent = this.nextElementSibling;
		if (collapseContent.style.display === "block") {
			collapseContent.style.display = "none";
		} else {
			collapseContent.style.display = "block";
		}
	});
};