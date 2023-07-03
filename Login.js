document.getElementById("login").addEventListener("click",Login)


 async function Login(event){
    event.preventDefault()
    let email=document.getElementById("email").value
    let pass=document.getElementById("password").value
    var bag={
        email,
        pass,
    }
   
    let response=await fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(bag),
        
    success: function(response){
        console.log(response);
    }

    })
    
      
}