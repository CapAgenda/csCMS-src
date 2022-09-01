### CSB CMS
Comic Strip Blogger CMS:

The CSB CMS is a content management system for comics drawn by Comic Strip Blogger. The management sytem updates the comic repository on a daily basis obtaining the latest comics drawn by CSB.

### CMS languages / technology utilized
## React
- The CMS is built using React
- Comics are changed utilizing useState and 
## GitHub
- Image_manager.py is called on a daily basis to update the image repository and a JSON file used to dynamically load images.
- GitHub Actions are used to build the project utilizing gh-pages action (add reference here)
## Python
- The python file image_manager.py obtains data and images from an RSS feed hosted on CSB's wordpress page.
- The script parses the XML and creates a JSON file listing information such as title, tags, categories as well obtaining the url for each comic.
- The requests library gets the images from the wordpress site. The images are then commited to the repository using an auto commit action (insert reference here).
## HTML, CSS and JavaScript
- The CMS front-end was coded from scratch; designed using HTML and CSS to try and give the application a "comic" look and feel. 
- Minimal JavaScript was utilized outside of React with most animation, transitions and style elements on the DOM being handled using CSS.
- The comic navigation buttons used some JavaScript to reference items in a JSON file to dynamically render previous / next

### Next Steps
## Add Secondary Pages and Polishing
- add routing and create secondary pages such as about, blog, etc.
- update workflow: currently runs on push- change to daily schedule and pull full archive of images.
- Integrate getalby.com to allow for crypto  / boosting.
- Set up redirect for site to launch on www.csb.lol.  

 