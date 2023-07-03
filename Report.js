let getdata=async(page_no)=>{
    let res=await fetch(`https://dull-puce-antelope-coat.cyclic.app/users`)
    let data=await res.json()
    console.log(data)
    console.log(data.length)
    let h=document.getElementById("total")
    h.innerText=`Total Guest:-${data.length}`
}
async function filter(){
    let x=document.getElementById("Profession").value
        let res=await fetch("https://dull-puce-antelope-coat.cyclic.app/users")
        let data=await res.json()
        let list=data.filter((el)=>{
            return el.profession===x
        })
        let h=document.getElementById("Student")
    h.innerText=`Total Student:-${list.length}`
    
    }
getdata()




