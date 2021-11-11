const form = document.getElementById('form');
// const firstName = document.getElementById('firstname');
// const lastName = document.getElementById('lastname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
// const userName = document.getElementById('username');
// const dob = document.getElementById('dob');
// const phone = document.getElementById('phone');
// const country = document.getElementById('country');
// const location = document.getElementById('location');



form.addEventListener('submit', e => {
	e.preventDefault();

	//checkInputs();
    register();
});

function register() {
const firstName = document.getElementById('firstname').value;
const lastName = document.getElementById('lastname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const userName = document.getElementById('username').value;
const dob = document.getElementById('dob').value;
const phone = document.getElementById('phone').value;
const country = document.getElementById('country').value;
const location = document.getElementById('location').value;

  const data ={firstName,lastName,email,password,userName,dob,phone,country,location}
console.log(data);
  fetch('https://teamlancers.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log('Success:', data);
        window.location.href = "https://teamlancers.herokuapp.com/practise/login_l.html";

      })
      //Then with the error genereted...
      .catch((error) => {
        console.error('Error:', error);
      });
}
function checkInputs() {
	// trim to remove the whitespaces
	const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    const userName = userName.value.trim();
    const dob = dob.value.trim();
    const phone = phone.value.trim();
    const country = country.value.trim();
    const location = location.value.trim();

	
	if(firstNameValue === '') {
		setErrorFor(firstName, 'Username cannot be blank');
	} else {
		setSuccessFor(firstName, 'Username');
	}
	if(lastNameValue === '') {
		setErrorFor(lastName, 'Username cannot be blank');
	} else {
		setSuccessFor(lastName, 'Username');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
    if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
    if(dobValue === '') {
		setErrorFor(dob, 'Username cannot be blank');
	} else {
		setSuccessFor(dob);
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Username cannot be blank');
	} else {
		setSuccessFor(phone);
	}
	if(countryValue === '') {
		setErrorFor(country, 'Username cannot be blank');
	} else {
		setSuccessFor(country);
	}
	if(locationValue === '') {
		setErrorFor(location, 'Username cannot be blank');
	} else {
		setSuccessFor(location);
	}
	

	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});