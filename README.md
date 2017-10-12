<img alt="Frontend Hound" align="left" src="http://frontend-md.s3.amazonaws.com/frontend_Hound_00002.png" width="100px">

This was forked from https://github.com/animade/frontend-md and extended to work with directory structure created from [create-react-app](https://github.com/facebookincubator/create-react-app).

### Generate simple documentation for your frontend code


# Frontend.md

Frontend.md looks at your frontend source code and generates a markdown file (called, predictably, FRONTEND.md) outlining the folder/file structure together with any topline comments. It's not a complete documentation system or styleguide generator. Rather it's designed to be a very simple tool which you can use on new or existing projects to get a high level view of how the code is laid out.

### Features

- Portable - drop it into any frontend project and see what's going on
- Easy setup - very little configuration required
- Attractive - generates a nested view of folder structure (inspiration taken from [sass-guidelin.es](http://sass-guidelin.es))
- Automated - Parses comments in a file, pulls out the first one and adds it as a description
- Readable - results are saved to a seperate Frontend.md markdown file in the root of your project

Below is a very simple example output for a create-react-app project. The file descriptions (i.e. "# App Structure" etc) are pulled automatically from the first comment in each file (look in `test/source` for examples).

### Public

````
my-app/
|
|- public/
|  |- favicon.ico ____________________________ # -
|  |- index.html _____________________________ # -
|  |- manifest.json __________________________ # -
````

### Src

````
my-app/
|
|- src/
|  |- App.css ________________________________ # -
|  |- App.js _________________________________ #
|  |- App.test.js ____________________________ #
|  |- index.css ______________________________ # -
|  |- index.js _______________________________ #
|  |- logo.svg _______________________________ # -
|  |- registerServiceWorker.js _______________ # In production, we register a service worker to serve assets from local cache.
````

### Installation

Frontend.md is available via npm, so you'll need node installed. Once that's done, install with:  

````
npm install frontend-md-create-react-app -g
````

### Usage

In the root directory of your project name sure there is a `package.json` file with the following attributes:

````
{
  "frontend": {
    "name": "YOUR PROJECT NAME",
    "sources": [
      {
        "title": "Public Files",
        "path": "public"
      },
        "title": "Src Files",
        "path": "src"
    ],
    "options": {
      "generateDate": false
    }

  }
}
````

Change the values above then generate your `FRONTEND.md` file by running `frontend-md` from the root of your project:

````
frontend-md
````

All being well, you'll see something like this:

````
✔ Found package.json...
✔ Found Public Files folder...
✔ Found Src Files folder...
✔ FRONTEND.md successfully created :-)
````

### Bugs

This is a very simple project and is held together by bits of string and sticky tape in some places, so if you find bugs please create an issue. Also any contributions or feature suggestions are very gratefully received!

### Limitations

Currently compatible with the following file extensions:

- .sass
- .less
- .scss
- .js

### Testing

Run `npm test` which will run `create-react-app my-app` under the tests/ directory and generate /tests/FRONTEND.md.

---

Frontend Hound logo is courtesy of [Tom Judd](http://judd.land).
