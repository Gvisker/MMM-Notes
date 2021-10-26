/* global Module */

/* Magic Mirror
 * Module: Notes
 *
 * By Grant Visker
 */

Module.register("Notes", {
	defaults: {
		updateInterval: 60000,
		retryDelay: 5000
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function () {
		var self = this;
		var dataRequest = null;
		var dataNotification = null;

		//Flag for check if module is loaded
		this.loaded = false;

		// Schedule update timer.
		this.getData();
		setInterval(function () {
			self.updateDom();
		}, this.config.updateInterval);
	},

	//display header

	//get text from web server

	//check for updates every x time

	//display text in bullet list
}

