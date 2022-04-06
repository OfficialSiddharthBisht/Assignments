let userData;
datafromLS = JSON.parse(localStorage.getItem("userData"));
document.querySelector("form").addEventListener('submit',(event)=>{
    event.preventDefault();
    let enterdEmail = document.querySelector("#enteredEmail").value;
    let enteredPassword = document.querySelector("#enteredPassword").value;
    datafromLS.forEach(user => {
        if(user.email === enterdEmail && user.password === enteredPassword){
            alert("Login Successful");
            
        }
    });
})