
var work = {
	"jobs": [
	{
		"employer": "DOT",
		"title": "City Planner",
		"location":"New York",
		"dates":"8/1/2009 - Present",
		"description" : "Senior Analyst <br>Play with data on maps, in databases, and in code."
	},
	{
		"employer": "DCP",
		"title": "City Planner",
		"location":"New York",
		"dates":"1/1/2007 - 7/31/2009",
		"description" : "Planner <br> Plan transportation projects and manage GIS datasets"
	}
	]
	//display: function taking no parameters
};


var projects = {
	"projects": [
		{
			"title": "string ",
			"dates": "string (works with a hyphen between them)",
			"description": "string",
			"images":["/images/sample.jpg", "/images/sample.jpg"]
			//"display": function taking no parameters
		},
		{
			"title": "string",
			"dates": "string - string",
			"description": "string",
			"images":["images/fry.jpg", "images/fry.jpg"]
			//"display": function taking no parameters
		}
	]
};

var bio = {
	"name" : "Seth Hotpepper",
    	"role" : "role",
    	"contacts" : {
    		"mobile": "555-555-5555",
    		"email": "heyseth@hotmail.com",
    		"github": "https://github.com/hotpepper/",
    		"twitter": "@qns0709",
    		"location": "New York, New York"
    	},
    	"welcomeMessage": "Hello, chumps..." ,
    	"skills": ["GIS", "Python", "SQL", "HTML", "CSS","JavaScript"],
    	"biopic": "images/fry.jpg"
    	//display: function taking no parameters		
	};



var education = {
	"schools": [
		{
         "name": "Columbia",
         "location": "New York, NY",
         "degree": "Master of Science",
         "majors": "Urban Planning",
         "dates": 2007,
         "url": "http://www.columbia.edu/"
     	},
     	{
         "name": "SUNY Buffalo",
         "location": "Buffalo, NY",
         "degree": "Bachlor of Arts",
         "majors": "Urban Planning",
         "minors": ["Spanish","Japanese"],
         "dates": 2007,
         "url": "http://www.buffalo.edu/"
     	}
     ],
    "onlineCourses":
    [
     {
         "title": "JavaScript Basics",
         "school": "Udacity",
         "date": 2015,
         "url": "http://www.Udacity.com/"
     },
     {
         "title": "Intro to HTML and CSS",
         "school": "Udacity",
         "date": 2015,
         "url": "http://www.Udacity.com/"
     }
     ]
    //"display": function taking no 
};

//----------------------------------------------------------
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
//----------------------------------------------------------

//if skills are present, add to header
if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills) {//i=0; i < bio.skills.length; i++) {
		$("#skills").append(
			HTMLskills.replace("%data%", bio.skills[i])
			);
	};
};

//add work experience
for (j in work.jobs) {
	$("#workExperience").append(
	HTMLworkStart );
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);

	$(".work-entry:last").append(
		HTMLworkEmployer.replace("%data%", formattedEmployer +
			formattedTitle+
			formattedLocation+
			formattedDates+
			formattedDescription
			)
		);
};




