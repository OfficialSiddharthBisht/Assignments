let userData;
if(localStorage.getItem('userData') === null){
    userData = [];
}else{
    userData = JSON.parse(localStorage.getItem('userData'));
}
document.querySelector("form").addEventListener('submit',(event)=>{
    event.preventDefault();
    let userInfo = {
        email : document.querySelector("#email").value,
        phoneNumber : document.querySelector("#phnumber").value,
        password : document.querySelector("#password").value,
    }
    userData.push(userInfo);
    localStorage.setItem('userData',JSON.stringify(userData));
});