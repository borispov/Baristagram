# <center> Baristagram </center>

<center> Instaclone for redux/react studying purposes, along with good portion of node. </center>

# _Instructions To Run The Project_:

First, clone the repository.
```
git clone git@github.com:borispov/Baristagram.git
```
Secondly, install the dependencies.
```
npm install
```
Run `npm start` and open up http://localhost:3002

There are few more development/build scripts and they're not necessary to run the project.

In a separate terminal:
```
npm run webpack:watch
npm run css:watch
```

What this does, is basically compile all the React code (.JSX and ES6 supported), I do not use Webpack to compile the CSS.
I chose to compile css independently to avoid webpack's process each time I add/edit the css.
*The test command is irrelevant at this point, as there is no testing implemented*

# Introduction: 
This project arose along with my decision to finally study Redux and expand my well-of-knowledge especially with React's ecosystem. However, I was bit initimidated approaching the docs, reading tutorials OR even watching videos on the subject, I don't know what it is, perhaps the scary boilerplate just to set you up. I ended up finding Wes Bos has a free course and according to comments/review people are enjoying it. I signed up and discovered the course is a bit old and most of it doesn't implement ES6, I was displeased. 
Short after, I decided I'm big enough to try and make an instagram clone using Redux by myself without relying on a code-along-tut.

### Tools Used: 
- React, React Router, Redux (and redux-thunk). 
- Semantic UI React & SASS ~ I decided to give semanticUI a try. I write briefly my opinion below. 
- NodeJS with Express framework (express-fileupload for handling uploads)
- Passportjs with JWT authtentication
- mongoDB via mongoose (mLabs.com) 
- webpack & babel ~ I had many obstacles configuring it to start development. And along the way stumbled upon other challenges ~~ eventually gave up setting up the HMR for serverside rendering.

*It certainly ended up being much more than a Redux project for me, I learned so much more and have even more left to learn.*

# Notes

### Server Side

At first, obviously, I used hard-coded data to setup my Redux.
Then, I moved everything to DB, which required 'rewiring' some of the redux code and adding the route handling.
It was a really good opportunity for me to implement user registration, login and use some popular tools like JWT.

Then, I wanted to find a simple way to handle image-uploading. I checked solutions using multer and GridFS but decided to use some more minimalistic like *express-fileupload*. However, I also had to decide how to store the image. **That took me a while to figure**. At first, I converted image's data to binary and then back to base64, trying to display the image as base64 on the client-side - That didn't felt right. currently, the solution is storing the file itself on the server, and serving the pathToFile, works good.

### Client Side

Well, took me *LOTS* of time to configure webpack and babel to even run react properly. But that's fine. 
This time, I wanted to use better structure pattern for my components but I failed badly IMHO, because it's inconsistent and bit scattered, I wanted to seperate the components with containers, but perhaps I was overwhelmed by lots of new things I had to learn and digest.

#### SEMANTIC UI
I really liked the simplicity at first usage. importing the neccessary component, rendering, providing props, easy. However, things started to get problematic for me when the configuration out of the box weren't enough -- I had to start customising and that's, really, is quite a pain. you have to provide !important flags to override certain properties in order for your styling have effect.
I had problem configuring a form to use encType for the file-uploading, so I used regular <form> tag.
I also have (*still do*) a problem with Grid's responsiveness being kinda bugged, I have not idea how to solve it, I tried providing my own css and it works partially.

<br>


# Sumarizing . . .

I really love this project, I love the process I had gone through with this project and the things I've learned, it has opened me to considering subjects I hadn't consider before like: Project Architecture, Planning and managing the development, having a workflow, using Trello for consistency and organization. 

One area I had failed to implement and I beat myself down for it: 
**Testing**, **Testing**, **Testing** !!!

and one thing that is a bit of downer -- it's a clone, not an original idea of mine. 
however, this indeed gives me a whole bunch of tools to create something original with a better code quality.

Boris. 