var nameSurname=document.getElementById("nameSurname")
var btn=document.getElementById("btn")
var yazi=document.getElementById("yazi")
console.log("Name Surname: "+nameSurname.value)
btn.onclick=()=>{
    alert(nameSurname.value)
}

nameSurname.addEventListener("keyup",()=>{
    yazi.innerHTML=nameSurname.value 
})