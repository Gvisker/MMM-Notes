/* Magic Mirror
 * Node Helper: {{MODULE_NAME}}
 *
 * By {{AUTOR_NAME}}
 * {{LICENCE}} Licensed.
 */

var NodeHelper = require('node_helper');

module.exports = NodeHelper.create({

	// Override socketNotificationReceived method.

	/* socketNotificationReceived(notification, payload)
	 * This method is called when a socket notification arrives.
	 *
	 * argument notification string - The identifier of the noitication.
	 * argument payload mixed - The payload of the notification.
	 */
	socketNotificationReceived: function(notification, payload) {
		if (notification === 'NOTIFICATION_TEST') {
			Log.log("Working notification system. Notification:", notification, "payload: ", payload);
			// Send notification
			this.sendNotificationTest();
		}
	},

	// Example function send notification test
	sendNotificationTest: function(payload) {
        this.sendSocketNotification("NOTIFICATION_TEST", payload);
	}

	// this you can create extra routes for your module
	extraRoutes: function() {
		var self = this;
		this.expressApp.get("/{{MODULE_NAME}}/extra_route", function(req, res) {
			// call another function
			values = self.anotherFunction();
			res.send(values);
		});
	},

	// Test another function
	anotherFunction: function() {
		return {test: 12345};
	}
});
