
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
}








/////////////API CALL COMPANY INFO/////////////
fetch('https://api.spacexdata.com/v3/info')
	.then(compinfo => compinfo.json())
	.then((res) => {
		createCompanyInfoOverview(res);
	})
	.catch(err => console.log(err))

function createCompanyInfoOverview(compinfo) {
	console.log(compinfo);

	document.getElementById("companyInfo").innerHTML +=
		"<p>" + "<b>" + "Founder: " + "</b>" + compinfo.founder + "</p>" +
		"<p>" + "<b>" + "Number of Employees: " + "</b>" + compinfo.employees + "</p>" +
		"<p>" + "<b>" + "Vehicles: " + "</b>" + compinfo.vehicles + "</p>" +
		"<p>" + "<b>" + "Valuation: " + "</b>" + compinfo.valuation + "</p>" +
		"<p>" + "<b>" + "Links: " + "</b>" + "<ul>" +
		"<li>" + "<a href='" + compinfo.links.twitter + "'>Twitter</a>" +
		"<li>" + "<a href='" + compinfo.links.flickr + "'>Flickr</a>" +
		"<li>" + "<a href='" + compinfo.links.elon_twitter + "'>Elon's Twitter</a>" +
		"<li>" + "<a href='" + compinfo.links.website + "'>Main</a>" +
		"</ul>" +
		"</p>";
};






/////////////NEWSLETTER VALIDATION/////////////


function validateForm() {
	var email = document.getElementById("emailAddress").value;
	var emailVal = /^[a-zA-Z0-9-_+%.]+@[a-zA-Z0-9]+\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;

	if (emailVal.test(email) == false) {
		document.getElementById("newsLetterNotification").innerHTML = "Please enter a valid e-mail address.";
		document.getElementById("emailAddress").focus();
		return false;
	}

	if (confirm("Are you sure you want to sign up for the SpaceX newsletter?")) {
		return true;
	} else {
		return false;
	}  
	return true;
} 








/////////////API CALL NEXT LAUNCH/////////////
fetch('https://api.spacexdata.com/v3/launches/next')
	.then(resultNextLaunch => resultNextLaunch.json())
	.then((res) => {
		createNextLaunchOverview(res);
	})
	.catch(err => console.log(err))

function createNextLaunchOverview(resultNextLaunch) {
	console.log(resultNextLaunch);

	document.getElementById("nextLaunch").innerHTML +=
		"<h3>" + resultNextLaunch.mission_name + "</h3>" +
		"<p>" + "<b>" + "Flight Number: " + "</b>" + resultNextLaunch.flight_number + "</p>" +
		"<p>" + "<b>" + "Rocket: " + "</b>" + resultNextLaunch.rocket.rocket_name + "</p>" +
		"<p>" + "<b>" + "LOCAL Launch date: " + "</b>" + resultNextLaunch.launch_date_local + "</p>" +
		"<p>" + "<b>" + "Launch Date UTC: " + "</b>" + resultNextLaunch.launch_date_utc + "</p>" +
		"<p>" + "<b>" + "Launch Site: " + "</b>" + resultNextLaunch.launch_site.site_name_long + "</p>" +
		"<p>" + "<b>" + "Details: " + "</b>" + resultNextLaunch.details + "</p>";
};


///////////NEXT LAUNCH COUNTDOWN TIMER/////////////
var countDownDate = new Date("July 1, 2019 00:00:00").getTime();


var timeLeft = setInterval(function () {

	var now = new Date().getTime();
	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("nextLaunchCountdown").innerHTML =
		"<p>" + "<b>" + "Days: " + "</b>" + days + "</p>" +
		"<p>" + "<b>" + "Hours: " + "</b>" + hours + "</p>" +
		"<p>" + "<b>" + "Minutes: " + "</b>" + minutes + "</p>" +
		"<p>" + "<b>" + "Seconds: " + "</b>" + seconds + "</p>";

	if (distance < 0) {
		clearInterval(timeLeft);
		document.getElementById("nextLaunchCountdown").innerHTML = "LAUNCH DATE HAS EXPIRED";
	}
}, 1000);



/////////////API CALL ROCKET INFORMATION/////////////

fetch('https://api.spacexdata.com/v3/rockets')
	.then(rocketInfo => rocketInfo.json())
	.then((res) => {
	createRocketOverview(res);
})
	.catch(err => console.log(err))

function createRocketOverview(rocketInfo){
	for(var i=0; i < rocketInfo.length; i++){
		console.log(rocketInfo[i]);

		document.getElementById('rocketInformation').innerHTML +=
			"<div class='rocketTable'>" +
			"<h3>" + rocketInfo[i].rocket_name + "</h3>" +
			"<p>" + "<b>" + "Status : " + "</b>" + "<i>" + rocketInfo[i].active + "</i>" + "</p>" +
			"<p>" + "<b>" + "Height (meters) : " + "</b>" + rocketInfo[i].height.meters + "</p>" +
			"<p>" + "<b>" + "Mass (kg) : " + "</b>" + rocketInfo[i].mass.kg + "</p>" +
			"<p>" + "<b>" + "Success Rate: " + "</b>" + rocketInfo[i].success_rate_pct + "</p>" +
			"<p>" + "<b>" + "Cost per Launch: " + "</b>" + rocketInfo[i].cost_per_launch + "</p>" +
			"<p>" + "<b>" + "Engines: " + "</b>" + rocketInfo[i].engines.number + "</p>" +
			"<p>" + "<b>" + "Engine type: " + "</b>" + rocketInfo[i].engines.type + "</p>" +
			"<p>" + "<b>" + "Description: " + "</b>" + rocketInfo[i].description + "</p>" +
			"</div>"
		;
	};

	function replaceTrue() {
		var newTextTrue = "Active";
		var oldStringTrue= document.getElementById('rocketInformation').innerHTML;
		var newStringTrue = oldStringTrue.replace(/true/g, newTextTrue);
		document.getElementById('rocketInformation').innerHTML = newStringTrue;
	}

	replaceTrue();

	function replaceFalse() {
		var newTextFalse = "Inactive";
		var oldStringFalse= document.getElementById('rocketInformation').innerHTML;
		var newStringFalse = oldStringFalse.replace(/false/g, newTextFalse);
		document.getElementById('rocketInformation').innerHTML = newStringFalse;
	}

	replaceFalse();

};



///////////LAUNCH PADS INFORMATION/////////////

fetch('https://api.spacexdata.com/v3/launchpads')
	.then(padInfo => padInfo.json())
	.then((res) => {
	createLaunchPadOverview(res);
})
	.catch(err => console.log(err))



function createLaunchPadOverview(padInfo){
	for(var i=0; i < padInfo.length; i++){
		console.log(padInfo[i]);

		document.getElementById('launchPadsInformation').innerHTML +=
			"<div class='padTable'>" +
				"<h3>" + padInfo[i].site_name_long + "</h3>" +
				"<p>" + "<b>" + "Status : " + "</b>" + "<i>" + padInfo[i].status + "</i>" + "</p>" +
				"<p>" + "<b>" + "Location: " + "</b>" + padInfo[i].location.region + "</p>" +
				"<p>" + "<b>" + "Attempted Launches: " + "</b>" + padInfo[i].attempted_launches + "</p>" +
				"<p>" + "<b>" + "Successful Launches: " + "</b>" + padInfo[i].successful_launches + "</p>" +
				"<p>" + "<b>" + "Description: " + "</b>" + padInfo[i].details + "</p>" +
				"<p>" + "<a href= '" + padInfo[i].wikipedia + "' >More information</a>" + "</p>" +
			"</div>"
		;
	};
};

























