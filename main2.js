fetch("https://www.strava.com/api/v3/athletes/27856438/stats", {
	"method": "GET",
	"headers": {
		"Authorization": "Bearer 7a9f51898c39d4ac5b46bd754d6f8e81686c339e"
	}
})
.then(response => response.json())
.then(response => {
  console.log(response);
  //console.log(response.content);
    
 document.getElementById('box1').innerHTML = response.all_run_totals.count;
 document.getElementById('box2').innerHTML = response.all_ride_totals.count;
    // document.getElementById('box2').innerHTML = response.username;
})
.catch(err => {
	console.log(err);
});




