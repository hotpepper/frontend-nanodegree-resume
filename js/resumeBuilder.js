var name = "seth hotpepper";
var role = "developer";
//$("#main").append(name)
//string.replace(old, new);


var email ="seth@hotmail.com";
var newEmail = email.replace("hotmail","gmail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is "+name+" and i am awesome";

var funThoughts = 
	awesomeThoughts.replace("awesome", "fun");

//$("#main").append(funThoughts);

//uses healper methods defined in helper.js - basically html formating set up for string replacement 
var formattedName = HTMLheaderName.replace(
	"%data%", name);

var formattedRole = HTMLheaderRole.replace(
	"%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills.length);

var bio = {
	"name" : "seth hotpepper",
    	"role" : role,
    	"contacts" : {
          "mobile": "555-555-5555",
          "email": email,
          "github": "https://github.com/hotpepper/",
          "twitter": "@seth",
          "location": "NYC"
    	},
    	"welcomeMessage": "Hello, chumps..." ,
    	"skills": skills,
    	"biopic": "images/fry.jpg"
    	//display: function taking no parameters		
	};
	//"picture": "images/fry.jpg",
	//"welcome": "Hello, chumps..."

bio.city = "New York";//adds city to bio object

var work = {
	"position": "planner",
		"employer": "DOT",
		"yearsWorked": 5,
		"city":"New York"
};
var education = {
	"schools": {
         "name": "Columbia",
         "location": "New York, NY",
         "degree": "Master of Science",
         "majors": "Urban Planning",
         "dates": 2007,
         "url": "http://www.columbia.edu/"
     },
    "onlineCourses": {
         "title": "JavaScript Basics",
         "school": "Udacity",
         "date": 2015,
         "url": "http://www.Udacity.com/"
     }
    //"display": function taking no 
};



//----------------------------------------------------------
$("#main").append(
	HTMLemail.replace("%data%",	bio.contacts.email)
	);
$("#main").append(
	HTMLmobile.replace("%data%",	bio.contacts.mobile)
	);
$("#main").append(
	HTMLtwitter.replace("%data%",	bio.contacts.twitter)
	);
$("#main").append(
	HTMLgithub.replace("%data%",	bio.contacts.github)
	);
$("#main").append(
	HTMLlocation.replace("%data%",	bio.contacts.location)
	);


$("#main").append(
	HTMLbioPic.replace("%data%",	bio.biopic)
	);



$("#main").append(bio.welcome);
$("#main").append( bio.location);

$("#main").append( HTMLworkEmployer.replace("%data%",work["employer"])	);
$("#main").append( HTMLschoolName.replace("%data%", education.schools.name));
