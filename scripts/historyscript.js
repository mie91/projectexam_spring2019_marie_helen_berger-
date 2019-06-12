
/////////////HISTORIC API Right////////////

fetch('https://api.spacexdata.com/v3/history')
	.then(historicInfoRight => historicInfoRight.json())
	.then((res) => {
	createHistoricTimelineRight(res);
})
	.catch(err => console.log(err))

function createHistoricTimelineRight(historicInfoRight){
	for(var i=0; i < historicInfoRight.length; i++){
		console.log(historicInfoRight[i]);
		document.getElementById('basicTimeline').innerHTML +=

			"<div class='timelineTextArea2 timelineTextAreaRight2'>" + 
				"<div class='timeline-content2'>" +
				"<h2>" + historicInfoRight[i].title + "</h2>" +
				"<h4>" + historicInfoRight[i].event_date_utc + "</h4>" +
				"<p>" + historicInfoRight[i].details + "</p>" +
				"<ul>" +
					"<li>" + "<a href='" + historicInfoRight[i].links.article + "'>Article</a>" +
					"<li>" + "<a href='" + historicInfoRight[i].links.wikipedia + "'>Wikipedia</a>" +
				"</ul>" +

				"</div>" +
				"</div>" +
			"</div>";
	};
};


