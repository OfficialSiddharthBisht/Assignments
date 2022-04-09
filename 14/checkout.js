document.querySelector("form").addEventListener('submit',(event)=>{
    console.log("working");
    event.preventDefault();
    let userInfo = {
        cardNumber : document.querySelector("#cardNumber").value,
        cvv : document.querySelector("#cvv").value,
        expiryDate : document.querySelector("#expiry").value,
        cardholder : document.querySelector("#cardholder").value,
    }
    if(userInfo.cardNumber == 8077305268807730 && userInfo.cvv == 585){
        alert(`An OTP is sent to your registered phone number`)
        window.location.href = "otp.html";
    }
    else{
        alert("Wrong Details");
    }
});