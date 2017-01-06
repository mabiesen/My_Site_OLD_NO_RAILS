# ResponsiveResume-XHTML

Files are now active at the following location: www.matthewbiesen.com.  

OLD GOAL: to create resume and portfolio that are fully responsive.  Inspired by recent work with Unity, an extremely versatile application that allows one to create apps for a variety of platforms.

NEW GOAL: one-stop-shop matthewbiesen page.  This seems like a great idea as I am not very fond of social media so my webpresence is lacking in that regard.  Page will help to provide insight into my personality and provide new web challenges, as well as allow a display of projects for non-github users.

Update 1/6/2017:
* Learned how to download backups from Cpanel and upload whole directories to Github.  BIG TIMESAVER!!!
* Altered file structure (again) unnecessarily to accomodate backups(cpanel offers three backup links, I clicked the wrong one the first time and the only folders backed up were CGI and Pages, folders that were created by Cpanel.  I was lead to believe all pages must be located in the Pages folder, I was wrong)
* Notes and Pics are removed from top navigation to accomodate mobile users. Projects changed to Project to accomodate mobile users as well, but this seems like bad tactic; to look into alternative solution.  Additionally, altered the structure of the Portfolio page to accomodate mobile users:  the text boxes now disappear on click and prompt users to click project links.
* Altered footer to remove tribute to W3 as W3 does not require credit.

Update 1/5/2017:
* Added button to allow direct viewing of resume pdf on resume page
* Created Piduino html for displaying raspberry pi/arduino projects
* Created About page to display some information about me
* Commented out pics button at top of page as the number of buttons caused clashing on smaller screens.  Probably should adjust w3 's' format for new number of columns.
* **Really need a better photo.  Photo should be sized appropriately to reduce load time.**
* **Changed file references for neater CPanel file structure.  The files in this directory currently do not reflect that structure**


Late Update 1/4/2017:
* mattbiesen.com successfully directed to matthewbiesen.com. NOTE: As of this time, I have not updated matthewbiesen.com.
* Project increased in scope!!! This is going to be an all-in-one Matthew Biesen website that will house my interests as well as career pursuits.
* Added headers, pdf resume page, homepage, page for pi/arduino project pictures.  Site contains links to additional pages that have yet to be created.
* finally got text scroll on page reload to work for portfolio page, but cheated slightly: used Jquery objects directly instead of citing from an array.  No matter what I tried, calls to array indexes returned object text instead of the object itself.  Tried converting text to object via $() and other methods with no success.  This was a little disheartening, I hope to find out where my code was lacking.

Update as of 1/4/2017:
* Instructed Godaddy to associated mattbiesen.com with mattthewbiesen.com.  Not yet working.
* Added scroll animation to porfolio.  Before update, if text was changed and scroll bar was down, scroll bar would stay down.  Now, text is scrolled to top in animation fashion.

Updates as of 1/3/2017:
* Added text and hyperlinks for portfolio projects
* Added js to show when link is clicked in portfolio

Updates as of 1/2/2017:
* Obtained domain matthewbiesen.com, linked html to website.
* Portfolio boxes now contain summary space.  Anticipating links, and Javascript to change summaries based on click/mouseover.
* Moved name to right side ("About Matthew Biesen") in cv because name was interfering with picture and seemed out of place in the picture. 


Anticipating:
*  Fix all typos and missing spaces in portfolio
*  Search Pis for more scripts to load to Github; currently lacking for certain languages
*  To provide print option for resume on cv page and resume page.
*  Provide a print option for all career-related web pages, and an easy print-all.
*  Provide page of travel and hobbies.
*  Provide information on the Biesen Brothers and link to website.
*  Obtain pictures of projects and family/friends/etc.  Need to profile pic and biesen brothers pic.
