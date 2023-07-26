function TDate() {
    let UserDate = document.getElementById("userdate").value;
    var ToDate = new Date();
    console.log(UserDate);
    if (new Date(UserDate).getTime() <= ToDate.getTime()) {
          alert("Times's up !!");
          return ;
     }

    clock(UserDate);
    setInterval( ()=>{clock(UserDate)},1000);
}

// document.getElementById("userdate").innerText = UserDate;
const input = document.querySelectorAll("input");

function clock(date1){
    const end = new Date(date1)
    const datee = new Date();  

    const total = end-datee;
    if(total<0) return;

    const days = Math.floor( total/(1000*60*60*24) );
    input[1].value = days;

    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    input[2].value = hours;

     const minutes = Math.floor( (total/1000/60) % 60 );
    input[3].value = minutes;
    
    const seconds = Math.floor( (total/1000) % 60 );
    input[4].value = seconds;    
   
}

