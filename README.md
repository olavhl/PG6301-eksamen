# PG6301 - Examn


## Tasks I've completed:

* [x] The program runs out of the box
  * To use the project run `npm i && npm start` to run the app
  * To run the test write `npm test`. 
    * It will test the entire project reading ALL files.
    * It will also display coverage.
* [x] Program is structured and created in a sensible way.
    * Frontend is structured into meaningful components.
    * The file structure is easy to understand.
* [x] Code follow good programming practises, both technologies and naming conventions.

### Grading Guideline
* [x] `npm start` runs both client and server
* [x] React app is both fetching (GET) and mutating (POST)
* [x] The app has a structured and clean layout
    * Using CSS-grid
* [x] Authentication by Google
* [x] Websockets

### Functional requirements
* [x] A logged-in user should be able to register more users in the system
    * Users have properties first name, last name and email address.
* [x] A user can send messages to other users
* [x] Users are able to see and respond to messages through the chat created with websockets.


## My solution
Throughout my preparation I learned a lot about React and API-design. After a rookie start I've learned
a lot about how to build a React app with a server.

### Design Choices
I have used CSS-grid and also given the app a simple dark-mode design. Nothing too special, but it's
easier to user the website when components are more centered. Throughout the program I give the user
feedback if he has not filled out all the inputs needed for to for instance add a user or send a message.

### Functionality
In the website you log in using Google. Then you can see your own profile, and list users. By default
there no "dummy-users", so you have to create the first users. When you've created one or several users,
you can send them individual messages. Throughout these steps you will both see GET- and POST-requests.
The reason why I only implemented GET and POST, is because the task said: `GET and (PUT, POST or DELETE)`.
I knew I had a lot of functionality that I wanted to implement, and I did the minimum-demand to be able to
show the most of my knowledge in the short period of time we had on the exam.

In the Chat-page you can write messages through websockets. Open two, or more browsers, and you can chat
with yourself, a "friend", or several "friends" (if you consider yourself as a friend). The messages
sent in the chat is goes through the server.

## Shortcomings...
If I'd done this exact project again I'd definitely made some different choices. I started of creating
the login with Google. It got hard to set the name for the chat-page, I didn't make it, and also setting
the authorization for the other parts of the project. The only page you have to be authorized to see is
the Profile page.

Creating tests were a huge problem to me. I used way too much time trying to figure out how to test the
login as well as the websockets. I'd love to have a better test-coverage but ended up at 62%. 
Unfortunately the high demands, and apparently my bad preparations, for tests made me use too much time 
on the tests instead of making an even better solution.

## Inspiration and sources
Throughout my work I've been using some code from lectures:
* [x] useLoading.js
* [x] http.js
* [x] useLocalStorage.js

I've used the lectures and the Github-repo for inspiration for the project.
I also copied the `randomString().js` from stackoverflow:
https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

For the tests in index.test.jsx I got the code from:
https://joaoforja.com/blog/how-to-test-a-rect-app-indexjs/ 

#### Other sources:
* https://github.com/kristiania-pg6301-2021/pg6301-react-and-express-lectures/tree/main
* https://github.com/arcuri82/web_development_and_api_design















