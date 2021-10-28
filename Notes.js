/* global Module */

/* Magic Mirror
 * Module: Notes
 *
 * By Grant Visker
 */

Module.register("Notes", {
        // Default module config.
        defaults: {
            text: "Hello World!"
        },

        getTemplate: function () {
            return "Hello Notes App!";
        },

        getTemplateData: function () {
            return this.config;
        }
    });




	//display header

	//get text from web server

	//check for updates every x time

	//display text in bullet list
}

