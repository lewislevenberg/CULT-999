var eclSelectedMaillists = {};

function eclSelectMaillist (obj, maillistId) {
	if (obj.checked) {
		if (!eclSelectedMaillists[maillistId]) {
			eclSelectedMaillists[maillistId] = {};
		}

		eclSelectedMaillists[maillistId][obj.value] = true;
	} else {
		delete eclSelectedMaillists[maillistId][obj.value];
	}
	
	var checkboxes = document.getElementsByName(obj.name);
	
	for (var i=0; i<checkboxes.length; i++) {
		checkboxes[i].checked = (eclSelectedMaillists[maillistId][checkboxes[i].value] == true);
	}

	if (!eclSelectedMaillists[maillistId]['email'] && !eclSelectedMaillists[maillistId]['sms']) {
		delete eclSelectedMaillists[maillistId];
	}

	var showPhoneContainer = false;

	for (var i in eclSelectedMaillists) {
		if (eclSelectedMaillists[i]['sms'] == true) {
			showPhoneContainer = true;
		}
	}

	if (document.getElementById('ecl_mobile_phone_container')) {
		if (showPhoneContainer) {
			document.getElementById('ecl_mobile_phone_container').style.display = '';
		} else {
			document.getElementById('ecl_mobile_phone_container').style.display = 'none';
		}
	}
}

function eclSubmitForm() {
	var isFormValid = true;

	for (var i in eclSelectedMaillists) {
		if (eclSelectedMaillists[i]['sms'] == true) {
			var phoneNumber = document.getElementById('ecl_phone_number').value;
			if (!(phoneNumber && phoneNumber.match(/^((?:[0-9])|(?:\()|(?:\))|(?:\-)|(?:\s))*$/))) {
				isFormValid = false;

				document.getElementById('ecl_phone_number_error').style.display = '';
			} else {
				document.getElementById('ecl_phone_number_error').style.display = 'none';
			}

			var smsGatewaySelect = document.getElementById('ecl_sms_gateway_id');

			if (!smsGatewaySelect.options[smsGatewaySelect.selectedIndex].value) {
				isFormValid = false;

				document.getElementById('ecl_sms_gateway_error').style.display = '';
			} else {
				document.getElementById('ecl_sms_gateway_error').style.display = 'none';
			}

			break;
		}
	}

	if (document.getElementById('ecl_mobile_phone_container')) {
		var fields = ['email', 'first_name', 'last_name'];

		for (var i=0; i<fields.length; i++) {
			if (!document.getElementById('ecl_' + fields[i]).value) {
				isFormValid = false;

				document.getElementById('ecl_' + fields[i] + '_error').style.display = '';
			} else {
				document.getElementById('ecl_' + fields[i] + '_error').style.display = 'none';
			}
		}

		var email = document.getElementById('ecl_email').value;
		var emailRegExp = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if (email && !emailRegExp.test(email)) {
			isFormValid = false;

			document.getElementById('ecl_email_invalid_error').style.display = '';
		} else {
			document.getElementById('ecl_email_invalid_error').style.display = 'none';
		}
	}

	if (isFormValid) document.getElementById('ecl_form').submit();
}

function eclSetStyles() {
	if (!document.getElementById('ecl_styles')) return;

	var styleCss = document.getElementById('ecl_styles').value;

	if (!styleCss) {
		setTimeout("eclSetStyles();", 50);
	}

	var styleElement = document.createElement('style');
	styleElement.setAttribute("type", "text/css");
	
	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = styleCss;
	} else {
	    var textElement = document.createTextNode(styleCss);
	    styleElement.appendChild(textElement);
	}
	
	document.getElementsByTagName('head')[0].appendChild(styleElement);

	if (eclReadCookie('ecl_notice') != '1') {
		if (document.getElementById('ecl_notice_image')) {
			document.getElementById('ecl_notice_image').style.display = '';

			eclCreateCookie('ecl_notice', '1', 365);
		}
	}
}

eclSetStyles();

function eclCreateCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires="+date.toGMTString();
	} else {
		var expires = "";
	}

	document.cookie = name + "=" + value + expires + "; path=/";
}

function eclReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}

	return null;
}

function eclEraseCookie(name) {
	eclCreateCookie(name,"",-1);
}