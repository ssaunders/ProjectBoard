var Promise = require('bluebird');
var _ = require('lodash');

module.exports = {
  getProject: getProject,
  getAllProjects: getAllProjects
};

function getProject(id) {
  //connect to DB
  //send request
  //return data

  var project = _.find(mockDB.projects, {id: id});

  return Promise.resolve(project);
}

function getAllProjects() {
  //connect to DB
  //send request
  //return data

  return Promise.resolve(mockDB.projects);
}


////DB MOCK
mockDB = {};
mockDB.projects = [{
  id: '1',
  title: 'Proj 1',
  primaryContact: 'bob',
  resources: ['JS', 'Python'],
  codeMonkeys: ['Jane', 'Billy'],
  description: '(from "db") An awesome project. Like, really awesome. So awesome you wish you could work on it.',
  links: {
    github: 'http://github.com'
  }
}, {
  id: '2',
  title: 'Proj 2',
  primaryContact: 'dan',
  resources: ['PHP', 'Ruby'],
  codeMonkeys: [],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed justo commodo, finibus velit at, luctus est. In venenatis, est non efficitur fringilla, felis nisl lobortis quam, in malesuada justo nisl in ex. Integer eu neque vel justo placerat interdum a eu massa. Duis dictum risus eget ante porta, vitae euismod neque consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis volutpat arcu, sit amet tempus turpis. Nam pellentesque diam velit, eu pharetra arcu rhoncus vitae. Suspendisse imperdiet porttitor mi, lacinia feugiat arcu dignissim quis. Fusce non ornare ipsum, at iaculis tortor. Suspendisse potenti. Vestibulum dictum magna vitae felis malesuada tristique congue vitae enim. Ut iaculis molestie ipsum sit amet fermentum.',
  links: {
    taiga: 'http://taiga'
  }
}, {
  id: '3',
  title: 'Proj 3',
  primaryContact: 'jane',
  resources: ['JQuery', 'Node'],
  codeMonkeys: ['May'],
  description: 'Suspendisse lacinia tellus nisl, sed ultrices dolor convallis et. Sed gravida auctor orci eget faucibus. Curabitur ac elit commodo, consequat elit id, interdum massa. Pellentesque lectus neque, eleifend quis turpis pretium, faucibus commodo eros. Fusce tempus ex diam, ac accumsan justo interdum eu. Fusce at nibh eu nulla consequat facilisis. Aliquam erat volutpat.\n\nInteger scelerisque est in mattis sagittis. Quisque ultricies ac arcu eget sodales.',
  links: {}
}];