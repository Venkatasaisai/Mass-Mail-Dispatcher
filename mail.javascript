function sendEmails() {
	// Get email, subject, and message values
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	
	// Validate email
	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!emailRegex.test(email)) {
		alert("Please enter a valid email address");
		return;
	}
	
	// Send email to each recipient
	var recipients = ["example1@example.com", "example2@example.com", "example3@example.com"];
	for (var i = 0; i < recipients.length; i++) {
		var recipient = recipients[i];
		
		// Send email using SMTP or API
		// Code for sending email goes here
	}
	
	alert("Emails sent successfully");
}