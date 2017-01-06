$(document).ready(function(){
	
//create list of jquery objects that will contain displayed text
var $pytext = $('#pytext');
var $vbtext = $('#vbtext');
var $jstext = $('#jstext');
var $rpitext = $('#rpitext');
var $htmltext = $('#htmltext');
var $rbtext = $('#rbtext');
var $ardtext = $('#ardtext');
var $gotext = $('#gotext');
var $untext = $('#untext');

var $displayarray = [$pytext, $vbtext, $jstext, $rpitext, $htmltext, $rbtext, $ardtext, $gotext, $untext];

//create text variables to display upon click
var twobreak = "</br>"	

var pyraspi = "<b>Summary:  </b>Python is the language of choice for programming beginners starting with Raspberry Pi. Python offers extended functionality through open source libraries." + twobreak + "Please see the Raspberry Pi section for more deatils";

var pywebscraplink = "<a href='https://github.com/mabiesen/Webscrape_And_Email-py'>Webscrape</a>";
var pywebscrap = "<b>Summary:  </b> Used python to receive information regarding the price of gold and silver from Kitco and send to my email account.</br></br> Please click the" + pywebscraplink + " link to view source code";

var pymaillink1 = "<a href='https://github.com/mabiesen/Webscrape_And_Email-py'>Webscrape</a>";
var pymaillink2 = "<a href='https://github.com/mabiesen/LedDisplayCoord-jspy'>LED</a>";
var pymaillist = "<ol><li>Used Python to send email with gold and silver prices</li><li>Used Python to fetch email containing LED coordinates</li></ol>";
var pymail = "<b>Summary:  </b>Two projects" + twobreak + pymaillist + "Please click the " + pymaillink1 + " or " + pymaillink2 + " links to view source code";

var pychallink1 = "<a href='https://github.com/mabiesen/Reddit_Challenge_287-py'>Kaprekar</a>";
var pychallink2 = "<a href='https://github.com/mabiesen/Reddit_Challenge_291-py'>Goldilocks</a>";
var pychallist = "<ol><li>Kaprekar's constant:  test the validity of Kaprekar's theory regarding four digit numbers.  Take user input and arrive at 6174 per Kaprekar's theory</li><li>Goldilocks challenge:  find which seats at a table fit Goldilocks' porridge heat and chair stability requirements.</li></ol>";
var pychal = "<b>Summary:  </b>Several Projects" + twobreak + pychallist + "Click the " + pychallink1 + " or " + pychallink2 + "  links to view source code";

var vbforelink = 'Links not available due to proprietary concerns.  Further information upon request.';
var vbforelist = "<ul><li>Update the actuals in each workbook once monthly</li><li>Update the authorized amount in each worksheet once monthly</li><li>User log macro to verify the personnel responsible for workbook changes.</li><li>Create forecast summary page for worksheets twice monthly</li><li>Create accrual preparation summary page once monthly at month end.</li></ol>"
var vbfore = "<b>Summary:  </b>Created series of Macros to interact with 93 worksheets across 42 workbooks.  Each worksheet represented one work order.  Macros saved hours of time" + twobreak + vbforelist + vbforelink;

var vbmacrolink = 'Pending consolidation of repositories';
var vbmacrolist = "<ul><li>Create classic style pivot table from contiguous data</li><li>Unhide all sheets macro to allow for comprehensive searches in the workbook</li><li>NIPSCO systems had two formats for work orders, created macros to convert from one format to the other.</li><li>Macro to horizontal align text as an alternative to merge and center (merge and center often interferes with equation performance</li><li>Macro to hide unused columns and rows in a worksheet for a less-cluttered appearance</li><li>Create table of contents page with hyperlinks to sheets</li></ul>";
var vbmacro = "<b>Summary  :</b>Created macro workbook to reduce time spent on menial Excel tasks.  Workbook saved several hours each month.  Distributed to coworkers." + twobreak + vbmacrolist + vbmacrolink;

var vbgolflink = 'Pending creation of repository';
var vbgolf = "<b>Summary:  </b>NIPSCO held a charity-based golf outing where hundreds of individuals were in attendance.  Created macro to allow for easy adjustments to team golf schedules." + twobreak + vbgolflink;

var vbstudieslink = 'Links not available due to proprietary concerns.  Further information upon request.';
var vbstudies = "<b>Summary  :</b>Created macro to automatically format Powerplant export containing study work order information.  Automatic formatting saved an average of 30 minutes each month." + twobreak + vbstudieslink;

var jstimelink = "<a href='https://github.com/mabiesen/Timer_Game-js'>Timer Game</a>";
var jstime = "<b>Summary :</b>This was an experiment with time in Javascript.  The user clicks to turn the clock 'on' and 'off' , the program records time spent on/off and provides a summary to the user upon completion." + twobreak + "Click the " + jstimelink + " to view source code";

var jswebscraplink = 'Source code pending the creation of repository';
var jswebscrap = jswebscraplink;

var jshhlink = "<a href='https://github.com/mabiesen/Haunted_House_Game-js'>Haunted House</a>";
var jshh = "<b>Summary:  </b>Short Haunted House game where the user must click around the screen in order to move forward in the game.  Built as a test of skill" + twobreak + "Click the " + jshhlink + " to view source code";

var jsledlink = "<a href='https://github.com/mabiesen/LedDisplayCoord-jspy'>LED</a>";
var jsled = "<b>Summary:  </b> This was a large, two-part project aimed  at making it easy to create displays on the Adafuit 32x32 RGB matrix.  The Javascript portion of this project provides the user several tools to make a 32x32 LED display.  The user can then copy the coordinates, send to a designated email account(with designated email subject), and use python to extract and parse informationon from email and display the coordinates on the LED display." + twobreak + "Click the " + jsledlink + " link to view source code";

var rpprojlink = 'Raspberry Pi page coming soon!';
var rpprojlist = "<ul><li>Own, soldered, and experimented with most Pi hats</li><li>Own and experimented with 10+ Sunfounder sensors including:  motion detction, distance sensing, photoresistors, reed swtiches, etc.</li><li>Created Pi webserver using Apache, PHP, and MySq</li><li>RetroPie gaming</li><li>Created basic list of installs/updates desirable for a new Raspberry Pi</li>";
var rpproj = "<b>Summary  :</b>Completed most basic projects recommended to Raspberry Pi newcomers." + twobreak + rpprojlist + rpprojlink;

var rpledlink = "<a href='https://github.com/mabiesen/LedDisplayCoord-jspy'>LED</a>";
var rpled = "<b>Summary:  </b>Major two part project aimed at making it easy to create new displays on the Adafruit 32x32 RGB matrix.  Python's role in this project is to received data from email, copy to a new file, parse the LED coordinates, and display the coordinates on the LED matrix connected to the Raspbery Pi." + twobreak + "Click the " + jsledlink + " link to view source code";

var rplaserlink = "<a href='https://github.com/mabiesen/Laser_Pointer_Rand_Direction-py'>Laser</a>";
var rplaser = "<b>Summary:  </b>Created a laser pointer dog/cat toy that shines a laser pointer in random directions.  The project used two servos and a slip ring to create a turret, Python code used to move the servos." + twobreak + "Click the " + rplaserlink + " link to view source code";

var rpboardlink = '';
var rpboard = "<b>Summary:  </b>Creating a board game using single motor, button, and led display.  Further information pending project completion."

var htmlprojlinkhh = "<a href='https://github.com/mabiesen/Haunted_House_Game-js'>Haunted House</a>";
var htmlprojlinkled = "<a href='https://github.com/mabiesen/LedDisplayCoord-jspy'>LED</a>";
var htmlprojlinkload = "<a href='https://github.com/mabiesen/FluidCSSBubbles'>Animated load bubbles and boxes</a>";
var htmlprojlinktime = "<a href='https://github.com/mabiesen/Timer_Game-js'>Timer Game</a>";
var htmlprojlist = "<ul><li>" + htmlprojlinkhh + "</li><li>" + htmlprojlinkled + "</li><li>" + htmlprojlinkload + "</li><li>" + htmlprojlinktime + "</li></ul>";
var htmlproj = "<b>Summary:  </b>Created several projects to flex HTML and styling skills." + twobreak + htmlprojlist + "Click on the links above to view source code.";
var htmlblank1 = '';
var htmlblank2 = '';
var htmlblank3 = '';

var rbchallink ='';
var rbchal = "Pending repository creation";
var rbblank1 = '';
var rbblank2 = '';
var rbblank3 = '';

var gochallinkrect = "<a href='https://github.com/mabiesen/RedditChallenge296Inter-GO'>Rectangles</a>";
var gochallinkmorph = "<a href='https://github.com/mabiesen/RedditChallenge295-GO'>Morph Strings</a>";
var gochallinktwelve = "<a href='https://github.com/mabiesen/RedditChallenge296-GO'>Twelve Days of Christmas</a>";
var gochallist = "<ul><li>Find overlap area of two rectangles in a Cartesian plane supplied by user.  Print area of overlap to the terminal</li><li>Morph one user supplied string into another string letter by letter and print to the terminal.</li><li>Print each verse of the twelve days of Christmas to the terminal.</li></ul>";
var gochal = "<b>Summary:  </b>Several Projects" + twobreak + gochallist + "Click the " + gochallinkrect + ", " + gochallinkmorph + ", and " + gochallinktwelve + " links to view source code";
var goblank1 = '';
var goblank2 = '';
var goblank3 = '';

var unballlink = '';
var unball = '';
var unblank1 = '';
var unblank2 = '';
var unblank3 = '';

//Create arrays for the item list of each language
var pyarray = [pyraspi, pywebscrap, pymail, pychal];
var vbarray = [vbfore, vbmacro, vbgolf, vbstudies];
var jsarray = [jstime, jswebscrap, jshh, jsled];
var rparray = [rpproj, rpled, rplaser, rpboard];
var htmlarray = [htmlproj, htmlblank1, htmlblank2, htmlblank3];
var rbarray = [rbchal, rbblank1, rbblank2, rbblank3];
var goarray = [gochal, goblank1, goblank2, goblank3];
var unarray = [unball, unblank1, unblank2, unblank3];


/*Function to get class*/
function getclass($myvar, i){
			var theclass = $myvar.attr("class");
			var theclassarray = theclass.split(" ");
			var myclass = theclassarray[i];			
			return myclass;
}
//--

//check which list item was clicked, 
function checkliclick(clickobject, listindex){
	var myclass = getclass($(clickobject), 0);
	var thetext = '';
	switch(myclass){
		case "python":
			thetext = pyarray[listindex];
			$pytext.html(thetext);
			$pytext.animate({ scrollTop: 0 }, "fast");
                        $pytext.fadeIn("fast");
			break;
		case "vba":
			thetext = vbarray[listindex];
			$vbtext.html(thetext);
			$vbtext.animate({ scrollTop: 0 }, "fast");
                        $vbtext.fadeIn("fast");
			break;
		case "javascript":
			thetext = jsarray[listindex];
			$jstext.html(thetext);
			$jstext.animate({ scrollTop: 0 }, "fast");
                        $jstext.fadeIn("fast");
			break;
		case "raspberrypi":
			thetext = rparray[listindex];
			$rpitext.html(thetext);
			$rpitext.animate({ scrollTop: 0 }, "fast");
                        $rpitext.fadeIn("fast");
			break;
		case "html":
			thetext = htmlarray[listindex];
			$htmltext.html(thetext);
			$htmltext.animate({ scrollTop: 0 }, "fast");
                        $htmltext.fadeIn("fast");
			break;
		case "ruby":
			thetext = rbarray[listindex];
			$rbtext.html(thetext);
			$rbtext.animate({ scrollTop: 0 }, "fast");
                        $rbtext.fadeIn("fast");
			break;
		case "arduino":
			thetext = ardarray[listindex];
			$ardtext.html(thetext);
			$ardtext.animate({ scrollTop: 0 }, "fast");
                        $ardtext.fadeIn("fast");
			break;
		case "golang":
			thetext = goarray[listindex];
			$gotext.html(thetext);
			$gotext.animate({ scrollTop: 0 }, "fast");
                        $gotext.fadeIn("fast");
			break;
		case "unity":
			thetext = unarray[listindex];
			$untext.html(thetext);
			$untext.animate({ scrollTop: 0 }, "fast");
                        $untext.fadeIn("fast");
			break;
	}
}


$('li').on('click',function(){
	$(this).addClass("visited");
	var index = $(this).index();		
	checkliclick(this, index);
});

$('.mytext').on('click',function(){
        $(this).css("display","none");
});

//Returns text scroll to top of text upon page reload.
//Ideally this would be an array iteration.  Difficulties with returning objects from array, keep returning text.  Doing .Parent didn't work, just got more text.
//tried using a class iteration, that returned the same text results
$(window).on('load',function(){
   $pytext.animate({ scrollTop: 0 }, "fast");   
   $vbtext.animate({ scrollTop: 0 }, "fast");  
   $jstext.animate({ scrollTop: 0 }, "fast");  
   $rpitext.animate({ scrollTop: 0 }, "fast");  
   $htmltext.animate({ scrollTop: 0 }, "fast");  
   $rbtext.animate({ scrollTop: 0 }, "fast");  	
   $ardtext.animate({ scrollTop: 0 }, "fast");  
   $gotext.animate({ scrollTop: 0 }, "fast"); 
   $untext.animate({ scrollTop: 0 }, "fast");   
});
	
});