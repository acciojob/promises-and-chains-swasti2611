let btn=document.querySelector("#btn");



btn.addEventListener('click',(event)=>{
    let age =document.querySelector("#age").value
    let Name=document.querySelector("#name").value;

if(age ==" " && Name==" "){
    alert(`fill proper`);
}
    return new Promise((resolve,reject)=>{

if(age>18){
    setTimeout(()=>{
       
        resolve(
            
            alert(`welcome , ${Name}, You can vote`)
           
        )
    },4000)
    console.log(Promise);
}else{
    
        reject(alert(`Oh sorry ${Name}. You aren't old enough.`));
    
}

    })
    

})


	
	