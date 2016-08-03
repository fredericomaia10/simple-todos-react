import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks/tasks.js';
import '../imports/api/tasks/server/publications.js';
import '../imports/api/tasks/methods.js';

Meteor.startup(() => {
  // code to run on server at startup
});
