// -------------------------------------------------
//
// Handles markdown rendering
//
// -------------------------------------------------

var fs = require('fs'),
  moment = require('moment'),
  c = require('./console_format'),
  _ = require('underscore');

var file_name = 'FRONTEND.md';
var file_folder = '';

var config_path = './package.json';

var self = (module.exports = {
  // ------------------------------------------------
  // Inserts an HR into the markdown
  //

  insertHr: function insertHr() {
    var output = '';
    output += '\n\n';
    output += '---';
    output += '\n\n';

    return output;
  },

  // ------------------------------------------------
  // Adds a timestamp
  //

  add_timestamp: function insertHr(options) {
    var output = '';
    var timestamp = moment().format('DD MMMM YYYY') + ' ';

    if (
      options &&
      (options.generateDate === false || options.generateDate === 'false')
    ) {
      timestamp = '';
    }

    output += '\n\n';
    output +=
      'Generated ' +
      timestamp +
      'using [Frontend.md](https://github.com/willhlaw/frontend-md-create-react-app)';
    output += '\n\n';
    output += '---';

    return output;
  },

  // -------------------------------------------------
  //
  // Adds the file header
  //
  // -------------------------------------------------

  add_header: function add_header(name, options) {
    var output = '';

    if (name.length < 1) {
      // TODO - find project name
      c.warn(
        '"name" attribute not found in ' +
          config_path +
          ', will not be included in output'
      );
      c.log(
        'To fix, please ensure the "frontend" object includes the following:'
      );
      c.log('"name": "My Project Name"');

      output += this.add_timestamp(options);
    } else {
      output +=
        '# ' + name + ' \
\n\n\
Frontend code structure for ' + name + '. \
';

      output += this.add_timestamp(options);
    }

    return output;
  },

  // -------------------------------------------------
  //
  // Compiles a markdown document from the file tree
  //
  // -------------------------------------------------

  compile: function compile(filetree, name, options) {
    var output = '';

    output += this.add_header(name, options);
    output += filetree;

    this.render(output);
  },

  // ------------------------------------------------
  // Renders the markdown
  //

  render: function render(string) {
    fs.writeFile(file_folder + file_name, string, function(err) {
      if (err) {
        c.error(err);
      } else {
        c.ok(
          file_folder +
            file_name +
            ' successfully created :-)' +
            '\n\n' +
            string +
            '\n'
        );
      }
    });
  }
});
