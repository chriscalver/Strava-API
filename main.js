fetch("https://www.strava.com/api/v3/athlete", {
	"method": "GET",
	"headers": {
		"Authorization": "Bearer 7a9f51898c39d4ac5b46bd754d6f8e81686c339e"
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
  //  console.log(response.content);
    
     document.getElementById('box1').innerHTML = response.id;
     document.getElementById('box2').innerHTML = response.username;
})
.catch(err => {
	console.log(err);
});




