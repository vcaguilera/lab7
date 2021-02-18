var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	project["viewAlt"] = false;
  	response.render('index', projects);
};
exports.view = function(request, response){
	project["viewAlt"] = true;
  	response.render('index', projects);
 };