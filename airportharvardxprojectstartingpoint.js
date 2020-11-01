 <!DOCTYPE html>

<html>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> 

<script>

function onDataReceived(data) {
	console.log(data);
	
	$('#name').text(data.name);
	$('#city').text(data.city);
	$('#weather').text(data.weather.weather);
	$('#temperature').text(data.weather.temp);
}

$(document).ready(function() {
	
	$('button').click(function() {
		var url = 
		'http://services.faa.gov/airport/status/{CODE}?format=application/json'
		.replace('{CODE}', $('input').val());
		
		$.get(url, onDataReceived);
	});
	
});

</script>
</head>
	
<body>
	
	<input placeholder="Enter airport code"></input>
	<button>Get info</button>

	<p>Airport name:</p>
	<p id="name"></p>
	<br/>
	
	<p>City:</p>
	<p id="city"></p>
	<br/>
	
	<p>Weather:</p>
	<p id="weather"></p>
	<br/>
	
	<p>Temperature:</p>
	<p id="temperature"></p>
	<br/>
</body>

</html>
