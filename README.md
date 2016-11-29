# CS 290 Assignment 4 Solution

This repo contains solution code for Assignment 4.  Here's a suggested grading flow for each student:

1. Make sure the project's dependencies are installed for the student's code, and then start their server:
  ```
  npm install
  npm start
  ```

2. Visit the student's server in your browser.  Start with the index page, e.g. at [http://localhost:3000](http://localhost:3000).  Make sure you can use the user selector there to navigate to the notes pages for individual users.

3. Make sure the individual user pages meet these conditions:

  * The notes for the user are correctly displayed.
  * The user's name is displayed in the navbar.
  * A new note can be added using the modal.

4. Visit some URLs that shouldn't work.  These should all return a 404.  Make sure to test at least one notes page URL for a user that doesn't exist, e.g. `/notes/nonexistentuser`.  This should also result in a 404 error.  Going to the notes page without specifying a user (i.e. `/notes/`) should also 404.
