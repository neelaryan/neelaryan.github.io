// popup mail script
$(function() {
	var form = $('#ajax-contact');					// Get the form.
	var formMessages = $('#form-messages');			// Get the messages div.
	$(form).submit(function(e) {					// Set up an event listener for the contact form.
		e.preventDefault();							// Stop the browser from submitting the form.
		var formData = $(form).serialize();			// Serialize the form data.
		$.ajax({									// Submit the form using AJAX.
			type: 'POST',url: $(form).attr('action'),data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('error');	// Make sure that the formMessages div has the 'success' class.
			$(formMessages).addClass('success');
			$(formMessages).text(response);			// Set the message text.
			$('#name').val('');						// Clear the form.
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			$(formMessages).removeClass('success');	// Make sure that the formMessages div has the 'error' class.
			$(formMessages).addClass('error');		// Set the message text.
			if(data.responseText !== '') {
				$(formMessages).text(data.responseText);
			}
			else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
});
