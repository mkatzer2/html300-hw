$("document").ready(function() {
  var project_list = document.getElementById("project-list");
  
  var projectsObject = {};
  projectsObject = {
      project1: {
        title: "Number Form",
        source: "http://mkatzer2.github.io/html300-hw/number-form",
        image: "images/number-forms",
        imageAlt: "Number Form Project"
      }
  };
  function buildProjectList(myObject) {
    var output = "";
    for (i in myObject) {
      output += '<li>';
      output += '<a href="' + projectsObject[i].source + '" target="_blank">';
      output += '<img src="' + projectsObject[i].image + '" alt="' + projectsObject[i].imageAlt + '" />';
      output += '<h3>' + projectsObject[i].title + '</h3>';
      output += '</a>';
      output += '</li>';
    }
    project_list.innerHTML = output; 
  }
  buildProjectList(projectsObject);
});
    
