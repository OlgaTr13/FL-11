
let numberOfIterations = 6;
let lengthOfNewPassword = 5;
let userLogin = prompt('Input login');

if (userLogin !== '' && userLogin !== null) {
	if (userLogin.length < numberOfIterations) {
		alert('I don\'t know any emails having name length less than 6 symbols');
	} else if (userLogin === 'user@gmail.com' || userLogin === 'admin@gmail.com') {
		let userPassword = prompt('Input password');
		if (userPassword !== '' && userPassword !== null) {
			if(userLogin === 'user@gmail.com' && userPassword === 'UserPass' || 
				userLogin === 'admin@gmail.com' && userPassword === 'AdminPass') {
				let changePassword = confirm('Do you want to change your password?');
				if (changePassword === true) {
					let oldPassword = prompt('Write old password');
					if (oldPassword !== '' && oldPassword !== null) {
						if (oldPassword === userPassword) {
							let newPassword = prompt('Write new password');
							if (newPassword.length < lengthOfNewPassword) {
								alert('It’s too short password. Sorry.');
							} else {
								let repeatNewPassword = prompt('Enter it again');
								if (newPassword !== repeatNewPassword) {
									alert('You wrote the wrong password');
								} else {
									alert('You have successfully changed your password');
								}
							}
						} else {
							alert('Wrong password');
						}
					} else {
						alert('You have failed the change.');
					}

				} else {
					alert('You have failed the change.');
				}
			} else {
				alert('Wrong password');
			}

		} else {
			alert('Canceled.');
		}
	} else {
		alert('I don’t know you');
	}

} else {
	alert('Canceled.');
}


