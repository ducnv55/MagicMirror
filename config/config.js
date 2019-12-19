/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "jp",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displayType: "analog",
				analogFace: "face-006"
				
			}
		},
		/*{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-alt",
						url: "webcal://ical.mac.com/yshinto/Japan%20Formula%203.ics"					
					}
				]
			}
		},*/
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Tokyo",
				locationID: "1850147",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "a3f1d789b6ac94d171b2b6913054c808",
				degreeLable: true,
				roundTemp: true,
				onlyTemp: true,
				showHumidity: true,				
				showWindDirection: false,
				useBeaufort: false,
				showFeelsLike: false,
				showWindDirectionAsArrow: false
			}
		},
		/*{
			module: 'MMM-forecast-io',
			position: 'top_right',  // This can be any of the regions.
			config: {	
				// See 'Configuration options' for more information.
				apiKey: '81b1bad4f183238fc6263938e0aef5dc', // Dark Sky API key.
				// Only required if geolocation doesn't work:
				latitude:   36.2048,
				longitude: 138.2529
			}
		},*/
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Tokyo",
				locationID: "1850147",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "a3f1d789b6ac94d171b2b6913054c808",
				roundTemp: true,
				maxNumberOfDays: 16,
				colored: true,
				scale: true,
				tableClass: "small"
			}
		},
		{
			module: 'MMM-SoccerLiveScore',
			position: 'top_right',
			header: 'Live-Scores',
			config: {
				leagues: [17, 8, 23],
				showNames: false,
				showLogos: true,
				displayTime: 20*1000,
				showTables: true
			}
		},
		/*{
			module: "MMM-News",
			position: "top_left",
			config: {
				apiKey : "a49b0c61324f48aea2004ecee6ad34dc",
				type: "horizontal",
				touchable: false,
				query : [
					{
						country: "us",
						category: "technology"
					},
					{
						country: "jp",
						category: "technology"
					}
					],
				}
		},*/
		{
			module: "compliments",
			position: "bottom_bar",	// This can be any of the regions.
			updateInterval: 5000,
			fadeSpeed: 1000,
			config: {	
				compliments: {
					morning: [
						"おはようDuck！"
					],
					evening: [
						"こんばんはDuck！"
					],
					cloudy: [
						"Today is a good day with clouds"
					],
					cloudy_windy: [
						"Bring your coat, it's windy"
					],
					fog: [
						"Fog, fog, all out there is fog"
					],
					thunderstorm: [
						"THOR is coming..."
					],
					day_sunny: [
						"Today is a sunny day",
						"It's a beautiful day",
						"Go out to get Vitamin D"
					],
					snow: [
						"Want to see snow?",
						"Snowball battle!"
					],
					rain: [
						"Don't forget your umbrella",
						"Raining today"
					]
				}
			}
		},
		{
			module: "newsfeed",
			position: "top_bar",
			config: {
				updateInterval: 5000,
				feeds : [
					{
						title: "NYT Tech News",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"
					},
					{
						title: "24h IT",
						url: "https://24h.com.vn/upload/rss/congnghethongtin.rss"
					},
					{
						title: "NHK",
						url: "https://www.nhk.or.jp/rss/news/cat0.xml"
					},
				],
			}
		},
		{
			module: "helloworld",
			position: "bottom_bar",
			config: {
				text: "VitDuck"
			},
		},
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
