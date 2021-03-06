import {check} from './helper';

export default {
  "g": {
    "cancel": "Cancel"
  },
  "project-status": {
    "on": "On",
    "maintenance": "Maintenance Mode",
    "off": "Off"
  },
  "project-formatter": {
    "id": "ID:",
    "status": "Status:",
    "deployment": "Active Deployment:"
  },
  "login-required": "You haven't logged in yet!",
  "login": {
    "input-label": "Enter your API key:",
    "input-error": "Empty key received",
    "success": "👍 Logged in as {{name}} <{{email}}>"
  },
  "logout": {
    "message": "👋 Bye"
  },
  "create": {
    "input-label": "Enter a project name or leave it empty for a random name:",
    "success": check + " New project has been created."
  },
  "list": {
    "no-projects": "You have no projects.",
    "no-projects-hint": "Run `runkod create` to create your first project.",
    "count-label-single": "1 project",
    "count-label": "{{n}} projects"
  },
  "show": {
    "no-projects": "You don't have any projects.",
    "no-projects-hint": "Run `runkod create` to create your first project.",
    "no-project": "No such project found: {{i}}",
    "select-project": "Select a project to show: "
  },
  "status": {
    "no-projects": "You don't have any projects.",
    "no-projects-hint": "Run `runkod create` to create your first project.",
    "no-project": "No such project found: {{i}}",
    "select-project": "Select to set project status:",
    "selected-project": check + " Project:",
    "select-status": "Select status:",
    "success": check + " Done"
  },
  "deploy": {
    "select-project": "Select a project: ",
    "selected-project": check + " Project:",
    "select-folder": "Local folder: ",
    "selected-folder": check + " Local folder: ",
    "no-project": "No such project found: {{i}}",
    "invalid-folder": "Invalid path! Please enter a valid folder!",
    "warning-no-html": "The deployment you are uploading doesn't contain any html files. Usually web applications contain at least one html file. Continue?",
    "warning-server-side": "Server side code detected. Note that Runkod doesn't provide server side code support. Continue?",
    "cancelled": "Cancelled",
    "uploading": "Uploading {{p}}%",
    "uploaded": check + " Upload completed",
    "activate": "Do you want to activate new deployment now?",
    "activated": check + " New deployment activated"
  }
};
