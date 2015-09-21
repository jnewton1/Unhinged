// @author Jahmal Newton
// Class: jgame.js
// Version 1.0 ITEC 4860 Fall 2015
// Written September 9, 2015


//Assigns varibles for Unhinged
gonetoforest = false;
gonetocastle = false;
gonetovillage = false;
beenhungry = false;
earnabonus = false;
doorunlocked = false;
exitunlocked = false;
beentoexit = false;

//List possible inventory items
stick = false;
apple = false;
shield = false;
stone = false;
dagger = false;
shirt = false;
tunic = false;
lightarmor = false;
slingshot = false;
key = false;
powder = false;

currentroom = "level";
searchtable = false;
crate = false;
soldierfaints = false;

//Begin 
$(document).ready(function() {
	$("#compass").fadeIn(3000);
	$("#message_begin").fadeIn(3000);
	$("#area_main").fadeIn(3000);
	$("#command_line").fadeIn(3000);
	$("form").submit(function() {
		var input = $("#command_line").val();