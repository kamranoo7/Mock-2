let getdata=async(page_no)=>{
    let res=await fetch(`https://dull-puce-antelope-coat.cyclic.app/users`)
    let data=await res.json()
 console.log(data)
}
getdata()





document.getElementById("user").addEventListener("click",User)

async function User(event){
    event.preventDefault()
    let id=document.getElementById("id").value
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
let res=await fetch(`https://dull-puce-antelope-coat.cyclic.app/users/${id}`,{
    method:"PATCH",
    body:JSON.stringify(bag),
    headers:{
        "Content-type":"application/json"
    }

})
let data=await res.json()

alert("successfully updated")
getdata()
console.log(data)
}