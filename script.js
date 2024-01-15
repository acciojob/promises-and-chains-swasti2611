let btn=document.querySelector("#btn");



btn.addEventListener('click',(event)=>{
    let age =document.querySelector("#age").value
    let Name=document.querySelector("#name").value;

    return new Promise((resolve,reject)=>{

if(age>18){
    setTimeout(()=>{
       resolve(
            alert(`welcome , ${Name}, You can vote`)
        )  
    },4000)
   
    
}else{
    setTimeout(()=>{
       reject(alert(`Oh sorry ${Name}. You aren't old enough.`));
    },4000)
        
    }

 })
    

})

	
	