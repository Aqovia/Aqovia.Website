# aqovia
Source to build static site of Aqovia using Travis, Gulp and Nunjucks.

On your local machine:
* run "npm install" to install dependencies
* run "npm run gulp" to clean and build the site
* run "npm run gulp serve" to run a testing site that will refresh with every changes (or so)

HTML content is in the folder _src/html  
New pages should be added to _src/html/pages  
New templates should be added to _src/html/templates

If you need to add new images, place them to _src/img

If you need to add new presentation files, such as PDF, add them to _src/resources

If you need to add new scripts, place them to _src/js

If you need to add new LESS partials, add them to _scr/less
