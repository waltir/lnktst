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
npm run serve - Starts live server running on public folder - The following must be added back to package.json scripts to use live server - "serve": "live-server public/"  
yarn run dev-server - Compiles webpack  
yarn run build:prod - Builds for prod env  
yarn run build:dev - Builds for dev env  
yarn run test - Runs all of our JEST unit tests  
node server/server.js - Starts Express server, however, you might need to 'yarn run build:prod' beforehand  

# INSTALLING DEPENDANCIES
yarn install : installs everything  
yarn install --production : only installs production dependancies  
yarn install --development : installs production and dev dependancies  

# DEPLOY TO HEROKU USING HEROKU CLI AND THE TERMINAL
heroku --version : check heroku cli version  
heroku login : login to heroku from the terminal  
heroku create : generates a random project  
heroku create {project name here} : manually pick your projects name  
heroku git:remote - a {add heroku repo / project name here} : manually change the heroku project  
git push heroku master : pushes the app to master  
heroku open : opens the app in the browser  
heroku logs : dumps all of the server logs into the terminal  