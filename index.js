document.getElementById("user").addEventListener("click",User)

async function User(event){
    event.preventDefault()
let name=document.getElementById("name").value
let age=document.getElementById("age").value
let place=document.getElementById("place").value
let profession=document.getElementById("Profession").value
let batch_name=document.getElementById("Batch").value


let bag={
    name,
    age,
    place,
    profession,
    batch_name
}
let res=await fetch("http://localhost:8080/users",{
    method:"POST",
    body:JSON.stringify(bag),
    headers:{
        "Content-type":"application/json"
    }

})
let data=await res.json()
alert("successfully registered")
console.log(data)
}