const form = document.getElementById('loginform');

const emails = document.getElementById('email');
const passwords = document.getElementById('password');




form.addEventListener('submit', e => {
	e.preventDefault();

	//checkInputs();
    login();
});

function login() {

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

  const data ={email,password}
console.log(data);
  fetch('https://teamlancers.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      //Then with the data from thehttp://127.0.0.1:5500/practise/login_l.html response in JSON...
      .then((data) => {
        console.log('Response:', data);

        sessionStorage.setItem('jwt', data.token)
        sessionStorage.setItem('user', JSON.stringify(data.user));

        if(data.token)
        window.location.href = "https://teamlancers.herokuapp.com/practise/profile.html";

      })
      //Then with the error genereted...
      .catch((error) => {
        console.error('Error:', error);
      });
}
function checkInputs() {

	const emailValue = emails.value.trim();
	const passwordValue = passwords.value.trim();	
	
	
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