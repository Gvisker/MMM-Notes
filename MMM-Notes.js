/* global Module */

/* Magic Mirror
 * Module: Notes
 *
 * By Grant Visker
 */

Module.register("Notes", {
        // Default module config.
        defaults: {},
  	start: function () {},
  	getDom: function()
	{ 
	 	var element = document.createElement("div")
  		element.className = "myContent"
	 	element.innerHTML = "Hello, World!"
  		return element
	},
  	notificationReceived: function() {},
  	socketNotificationReceived: function() {}




	//display header

	//get text from web server

	//check for updates every x time

	//display text in bullet list
}

 
