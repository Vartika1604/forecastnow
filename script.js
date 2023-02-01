const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a7f4c43ddfmsha434f9724fc0c1fp17f191jsn207fb556e6f0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather= (City) =>
{
cityName.innerHTML= City

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + City, options)
	.then(response => response.json())
	.then((response) =>
		{
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

		} )

	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>
{
	e.preventDefault()
	getWeather(city.value)

}
)
getWeather("Delhi")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow' , options)
	.then(response => response.json())
	.then((response) =>
		{
		console.log(response)
		cloud_pctl.innerHTML = response.cloud_pct
		templ.innerHTML = response.temp
		feels_likel.innerHTML = response.feels_like
		humidityl.innerHTML = response.humidity
		min_templ.innerHTML = response.min_temp
		max_templ.innerHTML = response.max_temp
		wind_speedl.innerHTML = response.wind_speed
		wind_degreesl.innerHTML = response.wind_degrees
		sunrisel.innerHTML = response.sunrise
		sunsetl.innerHTML = response.sunset

		} )

	.catch(err => console.error(err));
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai' , options)
	.then(response => response.json())
	.then((response) =>
		{
		console.log(response)
		cloud_pctk.innerHTML = response.cloud_pct
		tempk.innerHTML = response.temp
		feels_likek.innerHTML = response.feels_like
		humidityk.innerHTML = response.humidity
		min_tempk.innerHTML = response.min_temp
		max_tempk.innerHTML = response.max_temp
		wind_speedk.innerHTML = response.wind_speed
		wind_degreesk.innerHTML = response.wind_degrees
		sunrisek.innerHTML = response.sunrise
		sunsetk.innerHTML = response.sunset

		} )

	.catch(err => console.error(err));