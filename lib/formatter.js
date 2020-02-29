var moment = require('moment');
var chalk = require('chalk');

var constants = require('./constants');

var separator = '-'.repeat(80);

var projectName = function (project) {
  if (project.domain && project.domain.name) {
    return project.domain.name + '(' + project.name + ')';
  }

  return project.name;
};

var projectStatus = function (project) {
  switch (project.status) {
    case constants.PROJECT_STATUS_ON:
      return chalk.green('On');
    case constants.PROJECT_STATUS_OFF:
      return chalk.gray('Off');
    case constants.PROJECT_STATUS_MAINTENANCE:
      return chalk.gray('In Maintenance');
  }
};

var project = function (project) {
  var rv = '';

  var name = project.name;
  var id = project.id;
  var status = projectStatus(project);
  var lastDeploy = (project.deployment ? moment(project.deployment.created).fromNow() : '-');

  rv += separator + '\n';

  if (project.domain) {
    var domainName = project.domain.name;
    rv += chalk.inverse(domainName) + '(' + name + ')' + '\n\n';
  } else {
    rv += chalk.inverse(name) + '\n\n';
  }

  rv += 'ID: ' + id + '\t';
  rv += 'Status: ' + status + ' \t';
  rv += 'Last Deploy: ' + lastDeploy + '\t';

  if (project.redirect_to) {
    rv += chalk.italic('Redirects to: ' + project.redirect_to);
  }

  return rv;
};


module.exports = {separator: separator, project: project, projectName: projectName};