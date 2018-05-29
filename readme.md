# GIT COMMANDS
git init - Create a new repo  
git status - View the changes to your project code  
git add - Add files to staging area  
git commit - Creates a new commit with files from staging area  
git log - View recent commits  
git add . - Adds all recent changes to commit  
git commit -m "Commit message goes here" - Add a commit message  
git push - Pushes code to the default remote which is likely origin  

# SERVER COMMANDS
**npm run serve** - Starts live server running on public folder - The following must be added back to package.json scripts to use **live server** - "serve": "live-server public/"  
**yarn run dev-server** - Compiles webpack  
**yarn run build:prod** - Builds for prod env  
**yarn run build:dev** - Builds for dev env  
**yarn run test** - Runs all of our JEST unit tests  
**node server/server.js** - Starts Express server, however, you might need to 'yarn run build:prod' beforehand  

# INSTALLING DEPENDENCIES
**yarn install** - Installs everything  
**yarn install --production** - Only installs production dependencies  
**yarn install --development** - Installs production and dev dependencies  

# DEPLOY TO HEROKU USING HEROKU CLI AND THE TERMINAL
**heroku --version** - Check heroku cli version  
**heroku login** - Login to heroku from the terminal  
**heroku create** - Generates a random project  
**heroku create {project name here}** - Manually pick your projects name  
**heroku git:remote - a {add heroku repo / project name here}** - Manually change the heroku project  
**git push heroku master** - Pushes the app to master  
**heroku open** - Opens the app in the browser  
**heroku logs** - Dumps all of the server logs into the terminal  