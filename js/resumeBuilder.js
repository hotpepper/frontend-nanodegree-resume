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
	"name": "seth",
	"age": 32,
	"role": role,
	"contactInfo": {
		"email":"heyseth@hotmail.com",
		"mobile": "555-555-5555"
},
	"picture": "images/fry.jpg",
	"welcome": "Hello, chumps..."

};
bio.city = "New York";//adds city to bio object

var work = {
	"position": "planner",
		"employer": "DOT",
		"yearsWorked": 5,
		"city":"New York"
};
var education = {
	"name": "Udacity",
	"Years": "2014"
};



$("#main").append(
	HTMLprojectImage.replace("%data%",	bio.picture)
	);
$("#main").append(
	HTMLemail.replace("%data%",	bio.contactInfo.email)
	);
$("#main").append(
	bio.welcome
	);
$("#main").append( bio["city"]	);

$("#main").append( HTMLworkEmployer.replace("%data%",work["position"])	);
$("#main").append( HTMLschoolName.replace("%data%", education.name));
