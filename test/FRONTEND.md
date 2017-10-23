# Frontend Example 

Frontend code structure for Frontend Example. 

Generated using [Frontend.md](https://github.com/willhlaw/frontend-md-create-react-app)

---

### Public Files

````
my-app/
|
|- public/
|  |- favicon.ico ____________________________ # -
|  |- index.html _____________________________ # -
|  |- manifest.json __________________________ # -
````

### Src Files

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

### A test set of source files

````
source/
|- index.js _________________________________ # All the files in this directory should have test comments
|
|- stylesheets/
|  |- app.scss _______________________________ # App Structure
|
|  |- modules/
|    |- _buttons.scss ________________________ # Buttons & User Input
|    |- _footer.scss _________________________ # Footer styles
|    |- _header.scss _________________________ # Header styles
|    |- _menu.scss ___________________________ # Menu & Navigation
|
|  |- base/
|    |- _base.sass ___________________________ # Base styles
|    |- _layout.less _________________________ # Page Layout
|    |- _mixins.scss _________________________ # Sass mixins
|    |- _type.scss ___________________________ # Typography
|    |- _variables.scss ______________________ # Sass variables
|
|- javascripts/
|  |- app.js _________________________________ # Application init
````