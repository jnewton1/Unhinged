// @author Jahmal Newton
// Class: jgame.js
// Version 1.0 ITEC 4860 Fall 2015
// Written September 9, 2015


//Assigns varibles for Unhinged
gonetoforest = false;
gonetocastle = false;
gonetovillage = false;
gonetodesert = false;
gonetobonus = false;
doorunlocked = false;
exitunlocked = false;
beentoexit = false;

//List possible inventory items
stick = false;
shield = false;
liquor = false;
torch = false;
pebbles = false;
shirt = false;
tunic = false;
apple = false;
lightarmor = false;
slingshot = false;
key = false;
cookie = false;

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
					$('<p>You picked up a shield. You can now venture off into the forest..</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Pebbles
			else if (input == "take pebbles" || input == "take pebbles") {
				if (currentroom == "level" && pebbles == false) {
					pebbles = true;
					$('<p>You picked up a pebbles. Could I use these..?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Shirt
			else if (input == "take shirt" || input == "take shirt") {
				if (currentroom == "level" && shirt == false) {
					shirt = true;
					$('<p>You picked up a shirt.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//Slingshot
			else if (input == "take slingshot" || input == "take slingshot") {
				if (currentroom == "level" && slingshot == false) {
					slingshot = true;
					$('<p>You picked up a slingshot. This will allow me to stay out of sight..</p>').insertBefore("#placeholder").fadeIn(1000);
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

		//Implement search
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
				if (currentroom == "castle" && soldierfaints == true) {
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
			//*****End Search Class*******

		//Eat food
		else if (input.indexOf("eat") > -1) {
			
			if (input == "eat") {
				$('<p>Eat what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//Cookie
			else if (input == "eat cookie" || input == "eat strange cookie") {
				if (cookie == true) {
					$("#container").fadeOut(3000, function() {
						$("#gluttonous").fadeIn(3000);
					});
				}
				else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}