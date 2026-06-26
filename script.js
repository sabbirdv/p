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

