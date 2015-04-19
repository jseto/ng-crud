ng-crud
=======
Angular-based CRUD

Ingredients:
------------
- Server
  - node.js
  - Connect as server engine
  - CoffeeScript as programming language
  - MongoDB as database
- Client
  - Angular
  - jQuery
  - Bootstrap


ToDo
----
- Browser
  - ~~CRUD~~
    - ~~Create~~
    - ~~Read~~
  	- ~~Update~~
  	- ~~Delete~~
  - Form validation
  - Improve feedback to user
    - Show 'loading...' when performing AJAX
    - Show error message upon AJAX error response
  - Angular components for most common web elements
    - Form inputs
      - ~~Input~~
      - Select
      - Checkbox
      - Textarea
      - Etc (radio...)
      - ~~Generic support for crudInput directives~~
    - Form buttons
      - ~~Create / Update~~
      - others?
    - ~~CRUD table~~
  - Filters
    - ~~Singularize (to name a single item in collection)~~
  - IE bugs
    - Browser cache is being used when sending JSON requests
  - **Refactor everything!**
    - See https://github.com/johnpapa/angular-styleguide
- Server
  - Access control
    - Only allow access to specified collections, reject unspecified collections
    - Only allow access to specified properties in collections
    - Use JSON schema
      - To reject invalid properties in request
      - To filter unspecified properties in response
      - To validate input data
