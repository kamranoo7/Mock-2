

//Fetch Data
let getdata=async(page_no)=>{
    let res=await fetch(`https://dull-puce-antelope-coat.cyclic.app/users?_page=${page_no}_limit=5`)
    let data=await res.json()
    Show(data)
}
getdata()
//Sort By age Ascending
document.getElementById("SortAge").addEventListener("click",SortAge)
async function SortAge(){
    let res=await fetch("https://dull-puce-antelope-coat.cyclic.app/users")
    let data=await res.json()
    data.sort((a,b)=>{
        return a.age-b.age
    })
   Show(data)
}
//Deescending
document.getElementById("SortAge1").addEventListener("click",SortAge1)
async function SortAge1(){
    let res=await fetch("https://dull-puce-antelope-coat.cyclic.app/users")
    let data=await res.json()
    data.sort((a,b)=>{
        return b.age-a.age
    })
   Show(data)
}
//Filter By Profession

async function filter(){
let x=document.getElementById("Profession").value
    let res=await fetch("https://dull-puce-antelope-coat.cyclic.app/users")
    let data=await res.json()
    let list=data.filter((el)=>{
        return el.profession===x
    })
    Show(list)
}


function Show(data){
    document.getElementById("box").innerHTML=""
    data.forEach((el,index)=>{
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.setAttribute("src","data:image/jpeg;base64,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")
        let h=document.createElement("h1")
        h.innerText=`Name- ${el.name}`
        let h1=document.createElement("h2")
        h1.innerText=`Age- ${el.age}`
        let h2=document.createElement("h3")
        h2.innerText=`Place-${el.place}`
        let p=document.createElement("p")
        p.innerText=`Batch- ${el.batch_name}`
        let p1=document.createElement("p")
        p1.innerText=`Profession- ${el.profession}`
        let btn1=document.createElement("button")
       btn1.innerText="Delete"
       btn1.addEventListener("click",function(){
        delete1(index)
       })
        let a=document.createElement("a")
        a.innerText="Edit"
a.setAttribute("href","/update.html")
       div.append(img,h,h1,h2,p,p1,btn1,a)
        document.getElementById("box").append(div)
    })
}

//Delete
async function delete1(index){
    let id=index+1

let res=await fetch(`https://dull-puce-antelope-coat.cyclic.app/users/${id}`,{
    method:"DELETE",
   
    headers:{
"Content-Type":"application/json"
    },
})
let data=await res.json()
getdata()
console.log(data)
}

//Pagination

function Pagination(result,perpage){
let buttons=Math.ceil(result/perpage)
console.log(buttons)
}
Pagination(10,2)