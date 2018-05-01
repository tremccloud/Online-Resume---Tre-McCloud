
var bio = {
	"name" : "Tre McCloud",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "336-333-4444",
		"email" : "tre.mccloud@yahoo.com",
		"github" : "https://github.com/tremccloud",
		"twitter" : "https://twitter.com/tremccloud",
		"linkedin" : "https://es.linkedin.com/in/tremccloud",
		"location" : "North Carolina"
	},
	"welcomeMessage" : "Welcome to my Front End Web World",
	"skills" : ["Microsoft Excel & Office", "HTML, CSS & Javascript", "MySQL", "Software Engineering", "Problem-Solving"],
	"bioPic" : "images/Me225x225.png",
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = addHyperLink(HTMLemail,bio.contacts.email,bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"tremccloud");
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedTwitter = addHyperLink(HTMLtwitter,bio.contacts.twitter, "@Tmack82");
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "Tre McCloud");
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);



	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}


var work = {
	"jobs": [
		{
			"employer" : "AT&T",
			"title" : "Area Manager",
			"dates" : "April 2001 - Present",
			"description" : "Lead a Team of Managers in placement and Maintenance of Telecom communcation lines"
		},
		{
			"employer" : "RF Microdevices",
			"title" : "Production Technicianr",
			"dates" : "September 2000 - December 2001",
			"description" : "I provided maintenance for RF chip manufacturing plant, maintaining machines and equipment"
		}
	],
	display() {
		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				//Div para work experiences
				$("#workExperience").append(HTMLworkStart);
				//Unir el employer y el nombre del trabajo
				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
				var concattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(concattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);

				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
}


var projects = {
	"projects": [
		{
			"title" : "Praize Kraze Website",
			"dates" : "Match 2013 - Present",
			"description" : "Christian Centered Group Fitness",
			"url" : "http://www.praizekraze.com/",
			"images": ["images/PraizeKraze.png"],
		},
		{
			"title" : "Daily Dashboard",
			"dates" : "April 2018",
			"description" : "Realtime Production Dashboard for work",
			"url" : "",
		"images": ["images/DailyDashboard.png"],
		}
	],
	display() {
		if (projects.projects.length > 0) {
			for (project in projects.projects) {
				$("#projects").append(HTMLprojectStart);

				//var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedTitle = addHyperLink(HTMLprojectTitle, projects.projects[project].url, projects.projects[project].title)
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}
		}
	}
}


var education = {
	"schools": [
		{
			"name" : "Geogia State University",
			"location" : "Atlanta, GA",
			"degree" : "B.S",
			"majors" : ["Computer Science"],
			"dates" : 2016,
			"url" : "http://www.gatech.edu/"
		},
		{
			"name" : "Atlanta Technical College",
			"location" : "Atlanta, GA",
			"degree" : "A.A.S",
			"majors" : ["Information Systems"],
			"dates" : 2014,
			"url" : "http://www.atlantatech.edu/"
		},
		{
			"name" : "Atlanta Technical College",
			"location" : "Atlanta, GA",
			"degree" : "A.A.S",
			"majors" : ["Electronics Engineering"],
			"dates" : 2012,
			"url" : "http://ujaen.es"
		}

	]
	,
	"onlineCourses": [
		{
			"title" : "Front End Web Nanodegree",
			"school" : "Udacity.com",
			"dates" : 2018,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title" : "Become a Web Developer",
			"school" : "Lynda.com",
			"dates" : 2017,
			"url" : "https://www.lynda.com/learning-paths/Web/become-a-web-developer"
		},

	],
	display() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);

			for (school in education.schools) {
				if (!education.schools[school].url) {
					var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				}else{
					var formattedName = addHyperLink(HTMLschoolName,education.schools[school].url,education.schools[school].name);
				}
				$(".education-entry:last").append(formattedName);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);

				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		if (education.onlineCourses.length > 0) {
			$('#education').append(HTMLonlineClasses);

			for (onlineCourse in education.onlineCourses) {
				$('#education').append(HTMLschoolStart);

				var formattedOnlineTitle = addHyperLink(HTMLonlineTitle,education.onlineCourses[onlineCourse].url, education.onlineCourses[onlineCourse].title);
				//var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
				$('.education-entry:last').append(formattedOnlineTitle);

				var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
				$('.education-entry:last').append(formattedonlineSchool);

				var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
				$('.education-entry:last').append(formattedonlineDates);

				//var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
				//$('.education-entry:last').append(formattedonlineURL);
			}
		}
	}
}


bio.display();
work.display();
projects.display();
education.display();


function addHyperLink(html,url,text){
    if (!text) {
    	text = url;
    }

    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);

    return formattedURL;
}

function inName() {
  var name = bio.name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
