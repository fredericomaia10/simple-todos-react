import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/client/accounts-config.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(()=> {
  let $ = document.querySelector.bind(document);
  render(<App/>, $('#render-target'));
});
