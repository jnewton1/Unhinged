// @author Jahmal Newton
// Class: jgame.js
// Version 1.0 ITEC 4860 Fall 2015
// Written September 9, 2015


//Assigns varibles for Unhinged
gonetocastle = false;
gonetodesert = false;
gonetoartic = false;
gonetomist = false;
gonetoforest = false;
doorunlocked = false;
exitunlocked = false;
beentoexit = false;

//List possible inventory items
stick = false;
shield = false;
apples = false;
note = false;
torch = false;
slingshot = false;
pebbles = false;
tunic = false;
lightarmor = false;
key = false;
cookies = false;

currentroom = "level";
searchtable = false;
crate = false;
soldierfaints = false;

//Begin 
$(document).ready(function() {
	$("#compass").fadeIn(3000);
	$("#message_begin").fadeIn(3000);
	$("#area_start").fadeIn(3000);
	$("#command_line").fadeIn(3000);
	$("form").submit(function() {
		var input = $("#command_line").val();

		//Help 
		if (input.indexOf("help") > -1) {
			if (input == "help") {
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
			}
		}

		//Take Items
		else if (input.indexOf("take") > -1 || input.indexOf("read") > -1) {
			
			if (input == "take") {
				$('<p>Take what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Stick
			else if (input == "take stick" || input == "take stick") {
				if (currentroom == "level" && stick == false) {
					stick = true;
					$('<p>You picked up a stick. Maybe this could be of some use..</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Shield
			else if (input == "take shield" || input == "take shield") {
				if (currentroom == "level" && shield == false) {
					shield = true;
					$('<p>You picked up a shield. You are now more confident to venture into the unknown..</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Apples
			else if (input == "take apples" || input == "take apples") {
				if (currentroom == "level" && apples == false) {
					apples = true;
					$('<p>You picked up some apples. It isnt much, but it may sustain you..</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Torch
			else if (input == "take torch") {
				if (currentroom == "castle" && torch == false) {
					torch = true;
					$('<p>You picked up a torch. You can now venture off into the dark hallway.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Note
			else if (input == "take note" || input == "read note") {
				if (currentroom == "castle" && note == false) {
					note = true;
					$('<p>You picked up a note. It reads: <br />I will rule this kingdom and amass the finest alcohol in all the lands. Don\'t worry... Once I conquer all the villages it will be impossible for the girl to escape with her life.<br /><br />P.S. I have dispatched soldiers across the land. Be weary they will attack anyone not bearing my symbol.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Slingshot
			else if (input == "take slingshot" || input == "take slingshot") {
				if (currentroom == "village" && slingshot == false) {
					slingshot = true;
					$('<p>You picked up a slingshot. This could be useful..</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Pebbles
			else if (input == "take pebbles" || input == "take pebbles") {
				if (currentroom == "village" && pebbles == false) {
					pebbles = true;
					$('<p>You picked up a pebbles. Could I use these..?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Tunic
			else if (input == "take tunic" || input == "take tunic") {
				if (currentroom == "desert" && tunic == false) {
					tunic = true;
					$('<p>You picked up a tunic. This may help me blend in here.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Lightarmor
			else if (input == "take lightarmor" || input == "take lightarmor") {
				if (currentroom == "level" && lightarmor == false) {
					lightarmor = true;
					$('<p>You picked up a lightarmor.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		}

			//*****Implement Search*******

		else if (input.indexOf("search") > -1) {
			if (input == "search") {
				$('<p>Search what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Table
			else if (input == "search table") {
				if (currentroom == "level" && apple == false && key == false) {
					apple = true;
					key = true;
					searchtable = true;
					$('<p>You found an apple on the table and picked it up. You also take a key from the droor and place it in your pack.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (apple == true && key == true) {
						$('<p>I am getting pretty hungry...and I wonder what door this key is for..</p>').insertBefore("#placeholder").fadeIn(1000);
					}
						
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Soldier
			else if (input == "search soldier") {
				if (currentroom == "desert" && soldierfaints == true) {
					key = true;
					$('<p>You found a key hidden in the soldier\'s armor.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Crate
			else if (input == "search crate") {
				if (currentroom == "bonus") {
					cookie = true;
					$('<p>You found a jar of cookies. What use could that possibly have?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
			//*****End Search*******


			//*****Implement eat*******
		//Eat food
		else if (input.indexOf("eat") > -1) {
			
			if (input == "eat") {
				$('<p>Eat what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Cookies
			else if (input == "eat cookies" || input == "eat cookies") {
				if (cookies == true) {
					$("#container").fadeOut(3000, function() {
						$("#gluttonous").fadeIn(3000);
					});
				}
				else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
		    //Apples
			else if (input == "eat apples" || input == "eat apples") {
				if (apples == true) {
					$('<p>Wow..so good.</p>').insertBefore("#placeholder").fadeIn(1000);
					apples = "ate";
				}
				else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else $('<p>I don\'t understand "' + input + '</p>').insertBefore("#placeholder").fadeIn(1000);
		}
			//*****End Eat*******
			
				//*****Implement Battle*******
		
		else if (input.indexOf("battle") > -1) {
			
			if (input == "battle") {
				$('<p>Battle what with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "battle soldier" && currentroom == "desert") {
				$('<p>Battle soldier with what?</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Soldier
			else if (input == "battle soldier with stick") {
				if (currentroom == "desert" && stick == true) {
					$('<p>You attack the soldier with a stick and caught him off guard!</p>').insertBefore("#placeholder").fadeIn(1000);
					soldierfaints = true;
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
					
			else if (input == "battle soldier with shield") {
				if (currentroom == "desert" && shield == true) {
					$('<p>You fend off the soldier\'s attack and defeat it!</p>').insertBefore("#placeholder").fadeIn(1000);
					soldierfaints = true;
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			
			else if (input == "battle soldier with slingshot"  || input == "battle soldier with sling shot" || input == "battle soldier with pebbles") {
				if (currentroom == "desert" && shield == true) {
					$('<p>You pelt the soldier with a barrage of pebbles. He flees in fear.</p>').insertBefore("#placeholder").fadeIn(1000);
					soldierfaints = true;
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);
		}
				//*****Implement Inventory*******
else if (input.indexOf("inventory") > -1) {
			if (input == "inventory") {
				//Stick
				if (stick == true) {
					stck = "Stick<br />";
				}
				else {
					stck = "";
				}
				
				//Shield
				if (shield == true) {
					shld = "Shield<br />";
				}
				else {
					shld = "";
				}
				
				//Apples
				if (apples == true) {
					appl = "Apples<br />";
				}
				else {
					appl = "";
				}
				
				//Note
				if (note == true) {
					nt = "Note from Captors<br />";
				}
				else {
					nt = "";
				}
				
				//Torch
				if (torch == true) {
					tch = "Torch<br />";
				}
				else {
					tch = "";
				}
				
				//Slingshot
				if (slingshot == true) {
					ss = "Slingshot<br />";
				}
				else {
					ss = "";
				}
				//
								
				//Pebbles
				if (pebbles == true) {
					pbl = "Pebbles<br />";
				}
				else {
					pbl = "";
				}
				//
				
				//Tunic
				if (tunic == true) {
					tnc = "Tunic<br />";
				}
				else {
					tnc = "";
				}
			
				//Furhide
				if (furhide == true) {
					fh = "Furhide<br />";
				}
				else {
					fh = "";
				}
				
				//Key
				if (key == true) {
					key = "Key<br />";
				}
				else {
					key = "";
				}
				
				//Cookies
				if (cookies == true) {
					cks = "Cookies<br />";
				}
				else {
					cks = "";
				}
				
				
				if (stick == "" && shield == "" && apples == "") {
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + stck + shld + appl + nt + tch + ss + pbl + tnc + fh + key + cks + '</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		}