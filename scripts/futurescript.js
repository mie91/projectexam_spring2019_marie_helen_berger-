
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




/////////////API FUTURE LAUNCHES/////////////

fetch('https://api.spacexdata.com/v3/launches/upcoming')
	.then(futureLaunchesInfo => futureLaunchesInfo.json())
	.then((res) => {
	createfutureLaunchesTable(res);
})
	.catch(err => console.log(err))

function createfutureLaunchesTable(futureLaunchesInfo){
	for(var i=0; i < futureLaunchesInfo.length; i++){
		console.log(futureLaunchesInfo[i]);

		document.getElementById('futureLaunchesTable').innerHTML +=
				"<tbody>" +
					"<tr>" + 
					"<td>" + futureLaunchesInfo[i].mission_name + "</td>" +
					"<td>" + futureLaunchesInfo[i].launch_year + "</td>" +
					"<td>" + futureLaunchesInfo[i].launch_date_utc + "</td>" +
					"<td>" + futureLaunchesInfo[i].rocket.rocket_name + "</td>" +
					"<td>" + futureLaunchesInfo[i].launch_site.site_name_long + "</td>" +
					"</tr>" +
				"</tbody>";

		;
	};
};
