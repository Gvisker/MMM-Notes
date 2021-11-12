/* global Module */

/* Magic Mirror
 * Module: Notes
 *
 * By Grant Visker
 */

Module.register("Notes", {
        // Default module config.
        defaults: {
            text: "Hello Notes App!"
        },	
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},
        getTemplate: function () {
            return "Hello Notes App!";
        },

        getTemplateData: function () {
            return this.config;
        },
	start: function () {
	    return "Hello Notes App!";
	}
    });




	//display header

	//get text from web server

	//check for updates every x time

	//display text in bullet list
}

 
