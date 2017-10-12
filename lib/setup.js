// -------------------------------------------------
//
// Gets config vars from ./package.json
//
// -------------------------------------------------

var fs = require('fs'),
  c = require('./console_format'),
  _ = require('underscore'),
  nconf = require('nconf');

var config_path = './package.json';

function correct_object_syntax() {
  c.log('{');
  c.log('\t"frontend": {');
  c.log('\t\t"name": "Your Project Name",');
  c.log(
    '\t\t"sources": "[{title: HEADER, path: PATH_TO_YOUR_CREATE_REACT_APP_FOLDER}]",'
  );
  c.log('\t}');
  c.log('}');
}

function createConfigObj(type, title, path) {
  return {
    type: type,
    title: title,
    path: path
  };
}

function parseFrontend(source, parsedResults) {
  // source should be object of {title:string, path:string}
  // name should be a string
  var defaultSources = [
    {
      title: 'Public',
      path: 'public'
    },
    {
      title: 'Src',
      path: 'src'
    }
  ];
  var title = (source || {}).title;
  var path = (source || {}).path;

  if (!_.isObject(source) || _.isEmpty(source)) {
    // ------------------------------------------------
    // Check for Frontend object, if it does not exist, use
    // default configs

    c.info('Frontend object not found in ' + config_path);
    c.info('Using defaults');

    // Run the callbacks
    defaultSources.forEach(function(source) {
      parseFrontend(source, parsedResults);
    });
  } else if (!_.isString(path)) {
    // ------------------------------------------------
    // Check for source string
    //

    c.error('Sources key not found in frontend object');
    console.log('%j', source);
    c.log('Fix by making sure the frontend object is correctly formatted:');
    correct_object_syntax();
  } else if (!fs.existsSync(path)) {
    // ------------------------------------------------
    // Check for path folder accesibility
    //

    c.error('Couldn\'t find path folder "' + path + '"');
    c.log('Please check the folder path and try again.');
  } else {
    // ------------------------------------------------
    // All's well
    //

    c.ok('Found ' + title + ' folder...');

    // Run the callback
    parsedResults.push(createConfigObj('source', title, path));
  }
}

var passed_setup = false;

var self = (module.exports = {
  // ------------------------------------------------
  // Error

  init: function init(callback) {
    if (fs.existsSync(config_path)) {
      // Do something

      var n = nconf
        .argv()
        .env()
        .file({
          file: config_path
        });

      var frontendObj = n.get('frontend') || {};
      var name = frontendObj.name || n.get('name') || 'This App with no name';
      var sources = frontendObj.sources;
      var parsedSources = [];
      var options = frontendObj.options;

      c.ok('Found package.json...');

      if (!_.isArray(sources)) {
        sources = [sources];
      }

      sources.forEach(function(source) {
        parseFrontend(source || {}, parsedSources);
      });

      if (_.isEmpty(parsedSources)) {
        c.error(
          "Couldn't find " +
            config_path +
            ' or find default folders.' +
            'Please create it in the root of your project and include a "frontend" object:'
        );
      } else {
        callback(parsedSources, name, options);
      }
    } else {
      c.error(
        "Couldn't find " +
          config_path +
          '. Please create it in the root of your project and include a "frontend" object:'
      );
      correct_object_syntax();
    }
  }
});
