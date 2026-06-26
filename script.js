function plantMatch(){
    const sunValue = document.getElementById("sunValue").value;
    const careValue = document.getElementById("careValue").value;
    const petValue = document.getElementById("petValue").value;
    const plantResult = document.getElementById("plantResult");
    let result = "Finding..." ;
    
    if(sunValue == "" || careValue == "" || petValue == ""){
        result ="Please select all options first!"
        plantResult.innerHTML = `
        <p class="text-lg font-semibold py-2 px-5 text-red-700 bg-red-100 rounded-lg w-fit">Recommended Plant: ${result}</p>`
    }else if(petValue === "Yes"){
        result =" It is pet-friendly and easy to care for."
    }else if(sunValue === "Low" && 
            careValue === "Easy" ){
        result =" Peace Lily. It is a beautiful indoor plant."
    }else if(sunValue === "Bright" &&  
            careValue === "Easy" ){
        result =" Peace Lily. It is a beautiful indoor plant."
    }else if(sunValue === "Low" && 
            careValue === "Medium" ){
        result =" Snake Plant. It grows well in low light and needs little care."
    }else if(sunValue === "Bright" && 
            careValue === "Medium" ){
        result ="Monstera. It loves bright indirect light."  
    }else{
        result ="This plant is not available right now!"
        plantResult.innerHTML = `
        <p class="text-lg font-semibold py-2 px-5 text-red-700 bg-red-100 rounded-lg w-fit">Recommended Plant: ${result}</p>`
    }
    plantResult.innerHTML = `
        <p class="text-lg font-semibold py-2 px-5 text-green-700 bg-green-100 rounded-lg w-fit">Recommended Plant: ${result}</p>`

}

function formValid(){
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userNumber = document.getElementById("userNumber").value;
    const userMassage = document.getElementById("userMassage").value;
    const userForm = document.getElementById("userForm");
    const userAlert = document.getElementById("userAlert");

    if(userName == "" || userName.length < 3 ){
        userAlert.innerHTML = `Enter your Name!`
        userAlert.classList = `text-red-500 text-center font-semibold`; 
    }else if(userEmail == "" || userEmail.length < 6 || !userEmail.includes("@") || !userEmail.includes(".") ){
        userAlert.innerHTML = `Enter your valid Email address!`
        userAlert.classList = `text-red-500 text-center font-semibold`; 
    }else if(userNumber == "" || userNumber.length < 11 || userNumber.length > 13 ){
        userAlert.innerHTML = `Enter your valid Number!`
        userAlert.classList = `text-red-500 text-center font-semibold`; 
    }else if(userMassage == "" || userMassage.length < 10 ){
        userAlert.innerHTML = `Type your Massage!`
        userAlert.classList = `text-red-500 text-center font-semibold`; 
    }else{
        userAlert.textContent = `Form submit successfuly.`
        userAlert.classList = `text-green-600 text-center font-semibold`;
        userForm.reset()
    }
}


setInterval(() => {
  const longFormate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  };
  const showTime = document.getElementById("showTime");
  if(!showTime)return ;
  const date = new Date();
  showTime.innerText = `${date.toLocaleString("en-BD", longFormate)}`;
}, 1000);

fullYear = document.getElementById("fullYear").innerHTML = new Date().getFullYear();

