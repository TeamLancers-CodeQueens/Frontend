const logout=document.getElementById("logout");
logout.addEventListener('click', e => {
    sessionStorage.clear();
    window.location.href = "https://teamlancers.herokuapp.com/practise/login_l.html";
	
});

function getProfile() {
    var user =JSON.parse(sessionStorage.getItem("user")) ;
    const fullName=document.getElementById("full-name");
    fullName.innerHTML = user.firstName + " " + user.lastName;

    const email= document.getElementById("email");
    email.innerHTML = user.email;

    const dob= document.getElementById("dob");
    dob.innerHTML = user.dob;

    const country= document.getElementById("country");
    country.innerHTML = user.country;

    const location= document.getElementById("location");
    location.innerHTML = user.location;

}
getProfile();

