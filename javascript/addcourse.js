const form = document.getElementById('addcourseform');

form.addEventListener('submit', e => {
	e.preventDefault();
	const courseName = document.getElementById('courseName').value;
	const email = document.getElementById('email').value;
	const instructorName = document.getElementById('instructorName').value;
	const courseDescription = document.getElementById('description').value;
	const courseOutline = document.getElementById('outline').value;
	const courseMaterial = document.getElementById('material').value;
	const coursereferences = document.getElementById('references').value;
	const contact = document.getElementById('phone').value;
	var user =JSON.parse(sessionStorage.getItem("user")) ;
const instructorId=user._id ;

	
	//checkInputs();
    addCourse({courseName,email,instructorName,instructorId,courseDescription,courseOutline,courseMaterial,coursereferences,contact});
});

function addCourse(data){
	console.log(data);

	fetch('https://teamlancers.herokuapp.com/addcourse', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
		.then((response) => response.json())
		//Then with the data from thehttp://127.0.0.1:5500/practise/login_l.html response in JSON...
		.then((data) => {
		  sessionStorage.setItem('course', JSON.stringify(data));
		  window.location.href = "https://teamlancers.herokuapp.com/practise/course";

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













